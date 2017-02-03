export default () => {
    return {
        restrict: 'E',
        require: 'ngModel',
        replace: true,
        transclude: true,
        template: require('./radiobutton.partial.html'),
        scope: {
          value: '<ngValue',
          disabled: '<?disabled'
        },
        link: {
            post: (scope: any, element: any, attrs: any, model: any) => {
                model.$formatters.push(key => {
                  scope.isSelected = key === scope.value;
                  return key;
                });

                scope.toggle = () => {
                    if (!scope.disabled && !scope.isSelected) {
                      scope.isSelected = !scope.isSelected;
                      model.$setViewValue(scope.value);
                    }
                };
            }
        }
    };
};
