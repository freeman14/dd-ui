import * as angular from 'angular';
import datePickerModule from './dateRangePicker/dateRangePicker.module';
import tooltipModule from './tooltip/tooltip.module';
import toggleButtonsModule from './toggleButtons/toggleButtons.module';

const module: ng.IModule = angular.module('dd-ui', [
  datePickerModule,
  tooltipModule,
  toggleButtonsModule
]);

export default module.name;
