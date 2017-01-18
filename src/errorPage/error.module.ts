import * as angular from 'angular';

import {ErrorComponent} from './error.component';
import {NotFoundComponent} from './notFound.component';
import {MaintenanceComponent} from './maintenance.component';
import run from './error.run';

const module: ng.IModule = angular.module('ep.error', []);

module.component('errorPage', new ErrorComponent());
module.component('maintenancePage', new MaintenanceComponent());
module.component('notFoundPage', new NotFoundComponent());
module.run(run);

export default module.name;
