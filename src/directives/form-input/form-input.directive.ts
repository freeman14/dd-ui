export function formInput ($timeout): ng.IDirective {
  'ngInject';

  return {
    require: ['ngModel', '^form'],
    link: (scope, iElement, iAttrs, ctrls: any[]) => {
      const [ngModelController, form] = ctrls;
      iElement.on('focus', () => $timeout(() => {
        ngModelController.$setPristine();
        form.$ddSubmitted = false;
      }, 0));
      iElement.on('blur', () => $timeout(() => ngModelController.$setDirty(), 0));
      ngModelController['$options'] = { updateOn: 'blur' };

      scope.$on('$destroy', () => {
        iElement.off('focus');
        iElement.off('blur');
      });
    }
  }
}
