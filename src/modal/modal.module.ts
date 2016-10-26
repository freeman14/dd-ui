import * as angular from 'angular';

import 'angular-ui-bootstrap/src/modal/index-nocss.js';
import 'angular-ui-bootstrap/src/position/position.css';
import './modal.less';

import run from './modal.run';

const module: ng.IModule = angular.module('ep.modal', [
  'ngSanitize',
  'ui.bootstrap.modal'
]);

module.run(run);

export default module.name;
