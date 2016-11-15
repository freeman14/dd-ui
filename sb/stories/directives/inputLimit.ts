let section: stotybook.ISection = sb.section('Directives');

section.story('Text Limit')
    .add('Input limit', `<input type="text" text-limit="100">`, {})
    .add('Textarea limit', '<textarea text-limit="500></textarea>', {});
