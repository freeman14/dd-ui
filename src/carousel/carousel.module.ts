import * as angular from 'angular';
import 'angular-animate';

import 'angular-ui-bootstrap/src/carousel';
import './carousel.less';

import run from './carousel.run';

const module: ng.IModule = angular.module('ep.carousel', [
  'ngSanitize',
  'ngAnimate',
  'ui.bootstrap.carousel'
]);

module.run(run);

export default module.name;
