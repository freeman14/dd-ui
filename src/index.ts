import * as angular from 'angular';
import './styles';
import directives from './directives/directives.module';
import datePickerModule from './dateRangePicker/dateRangePicker.module';
import tooltipModule from './tooltip/tooltip.module';
import toggleButtonsModule from './toggleButtons/toggleButtons.module';
import modalModule from './modal/modal.module';
import timestampModule from './timestamp/timestamp.module';
import timestampsRangeModule from './timestampsRange/timestampsRange.module';

const module: ng.IModule = angular.module('dd-ui', [
  datePickerModule,
  tooltipModule,
  toggleButtonsModule,
  modalModule,
  timestampModule,
  timestampsRangeModule,
  directives
]);

export default module.name;
