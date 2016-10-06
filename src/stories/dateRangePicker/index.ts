let overview: stotybook.ISection = sb.section('Date range picker');
overview.story('Date range picker')
  .add('Simple date range picker', '<ep-date-range-picker title-text="{{vm.text}}"></ep-date-range-picker>', { text: 'Demo text' });
