interface ITextLimitAttrs extends ng.IAttributes {
  textLimit: number;
}

interface ITextLimitScope extends ng.IScope {
  textLimit: number;
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
    scope: {},
    link($scope: ITextLimitScope, element: ng.IAugmentedJQuery, attrs: ITextLimitAttrs, ngModel: ng.INgModelController): void {
      const TEXT_VISIBLE_UNTIL: number = 10;
      const ALWAYS_VISIBLE: boolean = 'visibleLimit' in attrs;
      const display = ALWAYS_VISIBLE ? 'unset' : 'none';
      const indicator: ng.IAugmentedJQuery = $compile(`<span class='dd__limit__indicator' style="display: ${display};" ng-bind="textLimit"></span>`)($scope);
      let maxLength: number = +attrs.textLimit;
      const $setViewValue = ngModel.$setViewValue.bind(ngModel);
      const $render = ngModel.$render.bind(ngModel);
      $scope.textLimit = maxLength;
      element.attr('maxlength', maxLength);
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
        $setViewValue(value, trigger);
        if (trigger === 'input') {
          if (!ALWAYS_VISIBLE && getCharactersDiff(value || element.val(), maxLength) > TEXT_VISIBLE_UNTIL) {
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
