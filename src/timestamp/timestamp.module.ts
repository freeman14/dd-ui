import * as angular from 'angular';
import { timestampComponent } from './timestamp.component';

const module: ng.IModule = angular.module('ep.timestamp', []);
module.component('timestamp', timestampComponent);

export default module.name;
