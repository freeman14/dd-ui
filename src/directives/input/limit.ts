interface IInputLimitScope extends ng.IScope {
    textLimit: number;
    ngModel: string;
}

interface IInputLimitAttrs extends ng.IAttributes {
    textLimit: number;
}

export class InputLimit {
    public restrict: string = 'A';
    public scope: any = {
        ngModel: '<'
    };

    static instance(): ng.IDirectiveFactory {
        let directive: ng.IDirectiveFactory = ($compile: ng.ICompileService, $timeout: ng.ITimeoutService) => new InputLimit($compile, $timeout);
        directive.$inject = ['$compile', '$timeout'];
        return directive;
    }
    // @ngInject
    constructor(private $compile: ng.ICompileService, private $timeout: ng.ITimeoutService) { }

    public link: ng.IDirectiveLinkFn = (scope: IInputLimitScope, element: ng.IAugmentedJQuery, attrs: IInputLimitAttrs): void => {
        const indicator: ng.IAugmentedJQuery = this.$compile(`<span class='limit-indicator' ng-bind="textLimit"></span>`)(scope);
        const self: InputLimit = this;

        scope.textLimit = attrs.textLimit;
        element.parent('div').addClass('dd__limit');
        // element.wrap('<div class="text-limit-wrapper"></div>');
        element.after(indicator);

        self.countText(scope, element, attrs.textLimit);

        element.bind('keyup cut change paste', function (event: JQueryKeyEventObject): void {
            setTimeout(() => {
                self.countText(scope, element, attrs.textLimit);
            });
        });

    }

    private countText(scope: IInputLimitScope, element: ng.IAugmentedJQuery, textLimit: number): void {
        // using timeout instead scope.digest. SOmethimes we need to update scope in js events. But somethimes digest already in progress. 
        this.$timeout(() => {
            let value: number;
            let modelText: string = scope.ngModel || element.val();

            if (!modelText) {
                value = 0;
            } else {
                value = modelText.length;
            }

            element.attr('maxlength', textLimit);

            scope.textLimit = textLimit - value;
        }, 0);
    }
}
