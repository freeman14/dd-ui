export default () => {

    return {
        restrict: 'E',
        require: 'ngModel',
        replace: true,
        transclude: true,
        template: require('./checkbox.partial.html'),
        scope: {
            ngModel: '=',
            prechecked: '<?checkboxPrechecked'
        },
        link: (scope: any, element: any, attrs: any, model: any) => {
            scope.small = attrs.checkboxSmall !== undefined;

            model.$formatters.unshift(value => {
                scope.isChecked = value === true;
                return value;
            });

            scope.toggle = () => {
                scope.isChecked = !scope.isChecked;
                model.$setViewValue(scope.isChecked);
            };

        }
    };

};
