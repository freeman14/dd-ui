import * as angular from 'angular';
import 'angular-sanitize';

import 'angular-ui-bootstrap/src/modal/index-nocss.js';
import 'angular-ui-bootstrap/src/position/position.css';
import './modal.less';

import run from './modal.run';
import config from './modal.config';

const module: ng.IModule = angular.module('ep.modal', [
  'ngSanitize',
  'ui.bootstrap.modal'
]);

module.run(run);

module.config(config);

export default module.name;
