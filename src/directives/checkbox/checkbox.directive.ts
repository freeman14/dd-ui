export default () => {

    return {
        restrict: 'E',
        require: 'ngModel',
        replace: true,
        transclude: true,
        template: require('./checkbox.partial.html'),
        scope: {
            ngModel: '='
        },
        link: (scope: any, element: any, attrs: any, model: any) => {
            scope.modificator = (attrs.small !== undefined && '--small') || (attrs.prechecked !== undefined && '--prechecked') || '';
            console.log('scope.modificator',scope.modificator);

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
