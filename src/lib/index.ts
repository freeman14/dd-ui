import * as angular from 'angular';
import datePickerModule from './dateRangePicker/dateRangePicker.module';

const module: ng.IModule = angular.module('dd-ui', [
  datePickerModule,
]);

export default module.name;
