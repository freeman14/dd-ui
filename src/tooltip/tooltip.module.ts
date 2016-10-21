import * as angular from 'angular';
import 'angular-sanitize';

import 'angular-ui-bootstrap/src/popover/index-nocss';
import 'angular-ui-bootstrap/src/tooltip/tooltip.css';
import './tooltip.less';

import run from './tooltip.run';
import config from './tooltip.config';

const module: ng.IModule = angular.module('ep.tooltip', [
  'ngSanitize',
  'ui.bootstrap.popover'
]);

module.run(run);

module.config(config);

export default module.name;
