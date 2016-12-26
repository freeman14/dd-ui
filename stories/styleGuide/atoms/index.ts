let atoms: stotybook.ISection = sb.section('Atoms');

atoms.story('Atoms')
    .add('Buttons', require('./buttons.html'))
    .add('Typography', require('./typography.html'))
    .add('Inputs', require('./inputs.html'), {
      radioButtons: {
        value: 'option1'
      }
    })
    .add('Loading', require('./loading.html'))
    .add('Placeholders', require('./placeholders.html'));

