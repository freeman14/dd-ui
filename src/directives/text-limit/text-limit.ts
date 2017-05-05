interface ITextLimitAttrs extends ng.IAttributes {
  textLimit: number;
  visibleLimit: boolean;
}

interface ITextLimitScope extends ng.IScope {
  textLimit: number;
  visibleLimit: boolean;
}

export function textLimitDirective($compile, $timeout): ng.IDirective {
  'ngInject';

  const getCharactersDiff = (value: string, max: number) => max - value.length;
  const updateCharactersLeft = ($scope: ITextLimitScope, maxLength: number, content: string) => {
    $timeout(() => {
      $scope.textLimit = getCharactersDiff(content, maxLength);
    });
  };

  return {
    restrict: 'A',
    require: 'ngModel',
    scope: {
      visibleLimit: '<?visibleLimit',
    },
    link($scope: ITextLimitScope, element: ng.IAugmentedJQuery, attrs: ITextLimitAttrs, ngModel: ng.INgModelController): void {
      const TEXT_VISIBLE_UNTIL: number = 10;
      const ALWAYS_VISIBLE: boolean = $scope.visibleLimit;
      let display: string = 'unset';
      if (attrs.visibleLimit) {
        display = ALWAYS_VISIBLE ? 'unset' : 'none';
      }
      const indicator: ng.IAugmentedJQuery = $compile(`<span class='dd__limit__indicator' style="display: ${display};" ng-bind="textLimit"></span>`)($scope);
      let maxLength: number = +attrs.textLimit;
      const $setViewValue = ngModel.$setViewValue;
      const $render = ngModel.$render;
      $scope.textLimit = maxLength;
      element.attr('maxlength', maxLength);
      attrs.$set('ngTrim', 'false');
      element.parent('div').addClass('dd__limit');
      element.after(indicator);

      attrs.$observe('textLimit', (value: number) => {
        maxLength = value;
        element.attr('maxlength', maxLength);
        updateCharactersLeft($scope, maxLength, ngModel.$viewValue || element.val());
      });

      ngModel.$render = () => {
        $render();
        if (ngModel.$viewValue) {
          updateCharactersLeft($scope, maxLength, ngModel.$viewValue || element.val());
        }
      };

      ngModel.$setViewValue = (value, trigger) => {
        const ieInputEvent: boolean = trigger === 'keydown';
        $setViewValue(value, trigger);
        if (trigger === 'input' || ieInputEvent) {
          if (attrs.visibleLimit && !ALWAYS_VISIBLE && getCharactersDiff(value || element.val(), maxLength) > TEXT_VISIBLE_UNTIL) {
            indicator.css('display', 'none');
          } else {
            indicator.css('display', 'unset');
          }
          updateCharactersLeft($scope, maxLength, value || element.val());
        }
      };
    }
  }
}
