let atoms: stotybook.ISection = sb.section('Atoms');

atoms.story('Atoms')
    .add('Buttons', require('./buttons.html'))
    .add('Typography', require('./typography.html'))
    .add('Inputs', require('./inputs.html'), {
      inputText: 'Hello world!',
      textAreaText: 'Hello world!',
      radioButtons: {
        value: true,
        value2: true,
        default: true,
        disabled: true
      },
      checkboxes: {
        normal: true,
        small: true,
        prechecked: true
      }
    })
    .add('Loading', require('./loading.html'))
    .add('Text links', require('./textLinks.html'))
    .add('Tags', require('./tags.html'))
    .add('Placeholders', require('./placeholders.html'))
    .add('Icons', require('./icons.html'));

