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

      const isWhiteColor = (activeColor) => {
        const white = ['#fff', '#ffffff'];
        return activeColor && white.indexOf(activeColor.toLowerCase()) > -1;
      };

      scope.getColors = (): any => {
        /*
            as we put both border and color styles
            we need to omit white color and keep default style,
            otherwise checkbox is disappearing
        */
        if (!isWhiteColor(scope.activeColor)) {
          if (scope.prechecked) {
            return { 'border-color': scope.activeColor, color: scope.activeColor };
          } else if (scope.isChecked) {
            return { 'border-color': scope.activeColor, background: scope.activeColor };
          }
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
