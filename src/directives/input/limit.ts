interface IInputLimitScope extends ng.IScope {
  textLimit: number;
}

interface IInputLimitAttrs extends ng.IAttributes {
  textLimit: number;
  ngModel: string;
}

export class InputLimit {
  public restrict: string = 'A';
  public scope: any = true;

  static instance(): ng.IDirectiveFactory {
    let directive: ng.IDirectiveFactory = ($compile: ng.ICompileService) => new InputLimit($compile);
    directive.$inject = ['$compile'];
    return directive;
  }

  // @ngInject
  constructor(private $compile: ng.ICompileService) {
  }

  public link: ng.IDirectiveLinkFn = (scope: IInputLimitScope, element: ng.IAugmentedJQuery, attrs: IInputLimitAttrs): void => {
    const indicator: ng.IAugmentedJQuery = this.$compile(`<span class='limit-indicator' ng-bind="textLimit - ${attrs.ngModel}.length"></span>`)(scope);
    const maxLength = +attrs.textLimit;
    scope.textLimit = maxLength;
    element.attr('maxlength', maxLength);
    element.parent('div').addClass('dd__limit');
    element.after(indicator);
  }
}
