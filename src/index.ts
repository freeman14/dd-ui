import * as angular from 'angular';
import datePickerModule from './dateRangePicker/dateRangePicker.module';
import tooltipModule from './tooltip/tooltip.module';
import toggleButtonsModule from './toggleButtons/toggleButtons.module';
import modalModule from './modal/modal.module';

const module: ng.IModule = angular.module('dd-ui', [
  datePickerModule,
  tooltipModule,
  toggleButtonsModule,
  modalModule
]);

export default module.name;
