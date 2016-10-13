import * as moment from 'moment';

let overview: stotybook.ISection = sb.section('UI components');
overview.story('Date range picker')
  .add('Simple date range picker', '<ep-date-range-picker title-text="{{vm.title}}" range="vm.range" event-range="vm.eventRange"></ep-date-range-picker>',
    {
      title: 'Date picker',
      date: {
        start: moment().format('MM/DD/YYYY'),
        end: moment().format('MM/DD/YYYY')
      },
      range: {
        start: new Date(),
        end: new Date()
      },
      eventRange: {
        start: new Date(),
        end: new Date()
      }
    });
