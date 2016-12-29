import * as angular from 'angular';

import 'angular-ui-bootstrap/src/tabs/tabs.js';

import run from './tabs.run';

const module: ng.IModule = angular.module('dd.tabs', [
    'ui.bootstrap.tabs'
]);

module.run(run);

export default module.name;
