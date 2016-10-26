import * as angular from 'angular';
import { timestampsRangeComponent } from './timestampsRange.component';

const module: ng.IModule = angular.module('ep.timestampsRange', []);
module.component('timestampsRange', timestampsRangeComponent);

export default module.name;
