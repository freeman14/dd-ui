export function DropdownElement(): any {
  return {
    restrict: 'A',
    scope: {
      preventBodyClose: '<',
      openOnHover: '<'
    },
    link: {
      post: (scope: any, element: any, attrs: any, model: any): void => {

        const wrapper: ng.IAugmentedJQuery = angular.element('<div class="dd__dropdown--wrapper"></div>');

        element.wrap(wrapper);
        element.addClass('dd__dropdown--trigger');

        // If need to open dropdown on hover
        if (scope.openOnHover) {
          element.addClass('dd__dropdown--hover');
        } else {

          // Handle click only on trigger button
          element.bind('click', (event) => {
            if (event.target === element[0]) {
              element.toggleClass('dd__dropdown--open');
            }
          });

          // Handle body click
          angular.element(document.body).bind('click', (event) => {

            if (!scope.preventBodyClose) {
              const target: ng.IAugmentedJQuery = angular.element(event.target);

              if (target[0] !== element[0]) {
                element.removeClass('dd__dropdown--open');
              }

            }

          });
        }

      }
    }
  };
};

export function DropdownTemplate(): any {
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    template: require('./dropdown.partial.html')
  };
};
