import * as angular from 'angular';

import 'angular-ui-bootstrap/src/buttons';

const module: ng.IModule = angular.module('ep.toggleButtons', [
  'ui.bootstrap.buttons'
]);

export default module.name;
