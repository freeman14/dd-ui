import * as angular from 'angular';
import directives from './directives/directives.module';
import datePickerModule from './dateRangePicker/dateRangePicker.module';
import tooltipModule from './tooltip/tooltip.module';
import toggleButtonsModule from './toggleButtons/toggleButtons.module';
import modalModule from './modal/modal.module';
import carouselModule from './carousel/carousel.module';
import dropdownModule from './dropdown/dropdown.module';
import timestampModule from './timestamp/timestamp.module';
import timestampsRangeModule from './timestampsRange/timestampsRange.module';
import select from './select/select.module';
import tabs from './tabs/tabs.module';
import cropper from './cropper/cropper.module';
import errorPage from './errorPage/error.module';

const module: ng.IModule = angular.module('dd-ui', [
  datePickerModule,
  tooltipModule,
  toggleButtonsModule,
  modalModule,
  carouselModule,
  dropdownModule,
  timestampModule,
  timestampsRangeModule,
  select,
  directives,
  tabs,
  cropper,
  errorPage
]);

export default module.name;
