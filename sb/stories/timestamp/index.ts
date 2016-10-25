
let overview: stotybook.ISection = sb.section('UI components');
overview.story('Timestamp')
  .add('Timestamp', '<timestamp date="vm.date" timezone="vm.tz"></timestamp>',
    {
      date: new Date(),
      tz: 'America/Los_Angeles'
    });
