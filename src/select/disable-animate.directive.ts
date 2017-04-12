export function disableAnimate(): ng.IDirective {
  'ngInject';

  return {
    restrict: 'A',
    require: 'uiSelect',
    link: function (scope, element, attrs, $select: any) {
      $select.$animate = null;
    }
  };
}
