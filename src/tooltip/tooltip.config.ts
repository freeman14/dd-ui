export default function config($uibTooltipProvider: any): void {
  'ngInject';

  $uibTooltipProvider.options({
    animation: false,
    trigger: 'mouseenter'
  });
};
