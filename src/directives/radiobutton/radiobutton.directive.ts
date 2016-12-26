export default () => {

    return {
        restrict: 'E',
        require: 'ngModel',
        replace: true,
        transclude: true,
        template: require('./radiobutton.partial.html'),
        scope: {
            ngModel: '=',
            value: '='
        },
        link: (scope: any, element: any, attrs: any, model: any) => {
            model.$formatters.unshift(key => {
                scope.isSelected = key === attrs.value;
                return key;
            });

            scope.toggle = () => {
                scope.isSelected = !scope.isSelected;
                model.$setViewValue(attrs.value);
            };

        }
    };

};
