export default () => {

    return {
        restrict: 'E',
        require: 'ngModel',
        replace: true,
        transclude: true,
        template: require('./radiobutton.partial.html'),
        scope: {
          value: '=ngValue'
        },
        link: {
            post: (scope: any, element: any, attrs: any, model: any) => {
                setTimeout(()=> {
                  scope.isSelected = model.$viewValue === scope.value;
                  scope.$apply();
                }, 0);

                model.$formatters.push(key => {
                  scope.isSelected = key === scope.value;
                  return key;
                });

                scope.toggle = () => {
                  if (!scope.isSelected) {
                    scope.isSelected = !scope.isSelected;
                    model.$setViewValue(scope.value);
                  }
                };
            }
        }
    };

};
