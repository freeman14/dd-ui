import * as angular from 'angular';

import 'ui-select';
import { disableAnimate } from './disable-animate.directive';

const module: ng.IModule = angular.module('ep', [
    'ui.select'
]);

module.config(function (uiSelectConfig: any): void {
    uiSelectConfig.theme = 'selectize';
    uiSelectConfig.removeSelected = false;
});
module.directive('disableAnimate', disableAnimate);

export default module.name;
