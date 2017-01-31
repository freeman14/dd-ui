import controller from './confirmModal.controller';

export default class ConfirmModalComponent implements ng.IComponentOptions {
    public controller: any;
    public template: string;
    public controllerAs: string;
    public bindings: any;

    constructor() {
        this.bindings = {
            resolve: '<'
        };
        this.controller = controller;
        this.controllerAs = 'vm';
        this.template = require('./confirmModal.partial.html');
    }
}
