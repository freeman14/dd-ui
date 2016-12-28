export function toggleDirective() {
  return {
    restrict: 'E',
    replace: true,
    template: require('./toggle.partial.html'),
    scope: {
      ngModel: '=',
      onChange: '&'
    }
  };
}
