import UIComponentsSection from '../jsComponents.section';

UIComponentsSection.story('Timestamps')
  .add('Timestamp', '<timestamp date="vm.date" timezone="vm.tz" format="vm.format" class="demo__card"></timestamp>',
  {
    date: new Date(),
    tz: 'America/Los_Angeles',
    format: 'ddd, MMM D, YYYY h:mma'
  })
  .add('Timestamp Range', '<timestamps-range start="vm.start" end="vm.end" tz="vm.tz" format="vm.format" class="demo__card"></timestamps-range>',
  {
    start: '2016-10-21T17:00:00.002Z',
    end: '2016-10-26T19:45:00.002Z',
    tz: 'America/Los_Angeles',
    format: 'ddd, MMM D, YYYY h:mma'
  })
  ;
