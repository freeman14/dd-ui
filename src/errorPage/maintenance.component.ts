import { ErrorController } from './error.controller';

export class MaintenanceComponent implements ng.IComponentOptions {
    public bindings: any;
    public controller: any;
    public template: string;
    public controllerAs: string;

    constructor() {
        this.bindings = {
          config: '<'
        };
		    this.controller = ErrorController;
        this.template = require('./templates/maintenance.partial.html');
        this.controllerAs = 'vm';
    }
}
