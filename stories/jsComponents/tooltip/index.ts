import UIComponentsSection from '../jsComponents.section';

UIComponentsSection.story('Tooltip')
  .add('Simple tooltip', `<div class="tooltip__demo" popover-placement="bottom" popover-title="{{vm.title}}" uib-popover="{{vm.text}}">
      Some text with tooltip
    </div>`,
  {
    title: 'Tooltip title',
    text: 'Tooltip very long text'
  });
