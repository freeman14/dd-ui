let moleculs: stotybook.ISection = sb.section('Moleculs');

moleculs.story('Moleculs')
  .add('Image uploader', require('./uploaders.html'))
  .add('Toggle group', require('./toggleGroup.html'))
  .add('Select', require('./select.html'), {
    country: {},
    countries: [
      { name: 'Afghanistan', code: 'AF' },
      { name: 'Åland Islands', code: 'AX' },
      { name: 'Albania', code: 'AL' },
      { name: 'Algeria', code: 'DZ' },
      { name: 'American Samoa', code: 'AS' },
      { name: 'Andorra', code: 'AD' },
      { name: 'Angola', code: 'AO' },
      { name: 'Anguilla', code: 'AI' },
      { name: 'Antarctica', code: 'AQ' },
      { name: 'Antigua and Barbuda', code: 'AG' },
      { name: 'Argentina', code: 'AR' },
      { name: 'Armenia', code: 'AM' },
      { name: 'Aruba', code: 'AW' },
      { name: 'Australia', code: 'AU' },
      { name: 'Austria', code: 'AT' },
      { name: 'Azerbaijan', code: 'AZ' },
      { name: 'Bahamas', code: 'BS' },
      { name: 'Bahrain', code: 'BH' },
      { name: 'Bangladesh', code: 'BD' }
    ]
  })
  .add('Dropdown', require('./dropdown.html'))
  .add('DD Dropdown', require('./dd-dropdown.html'))
  .add('Grouped Items', require('./inputGroup.html'))
  .add('Alert', require('./alert.html'))
  .add('List', require('./list.html'), { check3: true, check5: true });
