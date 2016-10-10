// @ngInject
export default function config($uibTooltipProvider: any): void {
  $uibTooltipProvider.options({
    animation: false,
    appendToBody: true,
    trigger: 'mouseenter'
  });
};
