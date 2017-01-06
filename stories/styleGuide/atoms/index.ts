let atoms: stotybook.ISection = sb.section('Atoms');

atoms.story('Atoms')
    .add('Buttons', require('./buttons.html'))
    .add('Typography', require('./typography.html'))
    .add('Inputs', require('./inputs.html'), {
      inputText: 'Hello world!',
      textAreaText: 'Hello world!',
      radioButtons: {
        value: true,
        default: true
      }
    })
    .add('Loading', require('./loading.html'))
    .add('Placeholders', require('./placeholders.html'))
    .add('Icons', require('./icons.html'));

