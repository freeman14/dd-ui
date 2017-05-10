export function formInput (): ng.IDirective {
  'ngInject';

  return {
    require: 'ngModel',
    link: (scope, iElement, iAttrs, ngModelController: ng.INgModelController) => {
      iElement.on('focus', () => scope.$apply(() => ngModelController.$setPristine()));
      iElement.on('blur', () => scope.$apply(() => ngModelController.$setDirty()));
      ngModelController['$options'] = { updateOn: 'blur' };

      scope.$on('$destroy', () => {
        iElement.off('focus');
        iElement.off('blur');
      });
    }
  }
}
