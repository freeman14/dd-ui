import 'ui-storybook/sb';
import 'ui-storybook/stories';

let overview = sb.section('Demo page');
overview.story('Buttons')
  .add('Button with text', '<button ng-bind="vm.text"></button>', { text: 'Demo button' });
