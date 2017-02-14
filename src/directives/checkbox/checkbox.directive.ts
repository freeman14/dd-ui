export default () => {

  return {
    restrict: 'E',
    require: 'ngModel',
    replace: true,
    transclude: true,
    template: require('./checkbox.partial.html'),
    scope: {
      ngModel: '=',
      prechecked: '<?checkboxPrechecked',
      activeColor: '<?color',
      disabled: '<?disabled'
    },
    link: (scope: any, element: any, attrs: any, model: any) => {
      scope.small = attrs.checkboxSmall !== undefined;

      model.$formatters.unshift(value => {
        scope.isChecked = value;
        return value;
      });

      scope.getColors = (): any => {
        if (scope.prechecked) {
          return { 'border-color': scope.activeColor, color: scope.activeColor };
        } else if (scope.isChecked) {
          return { 'border-color': scope.activeColor, background: scope.activeColor };
        }
      };

      scope.toggle = () => {
        if (!scope.disabled) {
          scope.isChecked = !scope.isChecked;
          model.$setViewValue(scope.isChecked);
        }
      };

    }
  };

};
