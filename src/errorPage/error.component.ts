import { ErrorController } from './error.controller';

export class ErrorComponent implements ng.IComponentOptions {
    public bindings: any;
    public controller: any;
    public templateUrl: string;
    public controllerAs: string;

    constructor() {
        this.bindings = {
          config: '<'
        };
		this.controller = ErrorController;
        this.templateUrl = './errorPage/error.partial.html';
        this.controllerAs = 'vm';
    }
}
