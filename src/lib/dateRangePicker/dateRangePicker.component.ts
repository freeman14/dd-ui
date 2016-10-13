import { DateRangePickerController} from './dateRangePicker.controller';

export const dateRangePickerComponent: ng.IComponentOptions = {
  controller: DateRangePickerController,
  controllerAs: 'vm',
  template: require('./dateRangePicker.partial.html'),
  transclude: true,
  bindings: {
    title: '@?titleText',
    range: '<',
    eventDurationRange: '<?eventRange',
    api: '=?',
    onDateRangeChange: '&'
  }
};


