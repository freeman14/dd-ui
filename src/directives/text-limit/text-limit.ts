interface ITextLimitAttrs extends ng.IAttributes {
  textLimit: number;
}

interface ITextLimitScope extends ng.IScope {
  textLimit: number;
}

export function textLimitDirective($compile, $timeout): ng.IDirective {
  'ngInject';

  const updateCharactersLeft = ($scope: ITextLimitScope, maxLength: number, content: string) => {
    $timeout(() => {
      $scope.textLimit = maxLength - content.length;
    });
  };

  return {
    restrict: 'A',
    require: 'ngModel',
    scope: {},
    link($scope: ITextLimitScope, element: ng.IAugmentedJQuery, attrs: ITextLimitAttrs, ngModel: ng.INgModelController): void {
      const indicator: ng.IAugmentedJQuery = $compile(`<span class='dd__limit__indicator' ng-bind="textLimit"></span>`)($scope);
      const maxLength: number = +attrs.textLimit;
      const $setViewValue = ngModel.$setViewValue;
      const $render = ngModel.$render;

      $scope.textLimit = maxLength;
      element.attr('maxlength', maxLength);
      element.parent('div').addClass('dd__limit');
      element.after(indicator);

      ngModel.$render = () => {
        $render();
        if (ngModel.$viewValue) {
          updateCharactersLeft($scope, maxLength, ngModel.$viewValue || element.val());
        }
      };

      ngModel.$setViewValue = (value, trigger) => {
        $setViewValue(value, trigger);
        if (trigger === 'input') {
          updateCharactersLeft($scope, maxLength, value || element.val());
        }
      };
    }
  }
}
