
let overview: stotybook.ISection = sb.section('UI components');
overview.story('Timestamps')
  .add('Timestamp', '<timestamp date="vm.date" timezone="vm.tz" format="vm.format" class="demo__card"></timestamp>',
    {
      date: new Date(),
      tz: 'America/Los_Angeles',
      format: 'ddd, MMM D, YYYY'
    })
  .add('Timestamp Range', '<timestamps-range start="vm.start" end="vm.end" tz="vm.tz" format="vm.format" class="demo__card"></timestamps-range>',
    {
      start: '2016-10-21T08:00:00.002Z',
      end: '2016-10-26T09:45:00.002Z',
      tz: 'America/Los_Angeles',
      format: 'ddd, MMM D, YYYY'
    })
;
