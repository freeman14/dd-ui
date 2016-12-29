import * as angular from 'angular';
import directives from './directives/directives.module';
import datePickerModule from './dateRangePicker/dateRangePicker.module';
import tooltipModule from './tooltip/tooltip.module';
import toggleButtonsModule from './toggleButtons/toggleButtons.module';
import modalModule from './modal/modal.module';
import carouselModule from './carousel/carousel.module';
import timestampModule from './timestamp/timestamp.module';
import timestampsRangeModule from './timestampsRange/timestampsRange.module';
import select from './select/select.module';
import tabs from './tabs/tabs.module';

const module: ng.IModule = angular.module('dd-ui', [
  //datePickerModule,
  tooltipModule,
  toggleButtonsModule,
  modalModule,
  carouselModule,
  timestampModule,
  timestampsRangeModule,
  select,
  directives,
  tabs
]);

export default module.name;
