import * as angular from 'angular';

import 'ui-select';

const module: ng.IModule = angular.module('ep', [
    'ui.select'
]);

module.config(function (uiSelectConfig: any): void {
    uiSelectConfig.theme = 'selectize';
    uiSelectConfig.removeSelected = false;
});

export default module.name;
