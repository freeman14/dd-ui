import * as angular from 'angular';
import * as moment from 'moment';

import 'ob-daterangepicker/dist/scripts/ob-daterangepicker';
import { DateRangePickerComponent } from './dateRangePicker.component';

import './dateRangePicker.less';

const module: ng.IModule = angular.module('ep.dateRangePicker', ['obDateRangePicker']);
module.component('epDateRangePicker', DateRangePickerComponent);
module.constant('moment', moment); // todo: remove dirty hack

export default module.name;
