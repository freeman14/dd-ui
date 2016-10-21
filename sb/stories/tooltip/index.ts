let tooltip: stotybook.ISection = sb.section('UI components');
tooltip.story('Tooltip')
  .add('Simple tooltip', '<div style="margin: 100px" popover-placement="bottom" popover-title="{{vm.title}}" uib-popover="{{vm.text}}">Some text with tooltip</div>',
    {
      title: 'Tooltip title',
      text: 'Tooltip very long text'
    });
