let section: stotybook.ISection = sb.section('Directives');

section.story('Text Limit')
    .add('Input limit', `<input type="text" text-limit="100" ng-model="vm.name">`, { name: 'John Doe' })
    .add('Textarea limit',
    ` <textarea ng-model="vm.name" text-limit="4000"></textarea>`,
    { name: 'John Doe' });
