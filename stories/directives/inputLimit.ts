let section: stotybook.ISection = sb.section('Directives');

section.story('Text Limit')
    .add('Input limit always visible', `<div class="dd__input"><input type="text" text-limit="100" visible-limit ng-model="vm.name"></div>`, { name: 'John Doe' })
    .add('Input limit visible when reach limit', `<div class="dd__input"><input type="text" text-limit="100" ng-model="vm.name"></div>`, { name: 'John Doe' })
    .add('Textarea limit',
    ` <textarea ng-model="vm.name" text-limit="4000"></textarea>`,
    { name: 'John Doe' });
