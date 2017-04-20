export default function config($uibTooltipProvider: any): void {
  'ngInject';

  $uibTooltipProvider.options({
    animation: false,
    appendToBody: true,
    trigger: 'mouseenter'
  });
};
