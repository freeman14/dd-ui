// @ngInject
export default function config($uibModalProvider: any): void {
  $uibModalProvider.open({
    animation: true
  });
};
