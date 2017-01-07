import * as angular from 'angular';
import 'angular-animate';

import 'angular-ui-bootstrap/src/dropdown';
import './dropdown.less';

const module: ng.IModule = angular.module('ep.dropdown', [
  'ngSanitize',
  'ui.bootstrap.dropdown'
]);

export default module.name;
