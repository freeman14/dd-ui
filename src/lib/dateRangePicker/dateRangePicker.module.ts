import * as angular from 'angular';
import 'ob-daterangepicker/dist/scripts/ob-daterangepicker';
import { DateRangePicker } from './dateRangePicker.component';

import './dateRangePicker.less';

const module: ng.IModule = angular.module('ep.dateRangePicker', ['obDateRangePicker']);
module.component('epDateRangePicker', new DateRangePicker);

export default module.name;
