export default class ModalService {

    constructor(
        private $uibModal: any
    ) {
        'ngInject';
    }


    /**
     * Open any component in modal window
     * 
     * @param component
     * @param [config={}]
     * @returns 
     */
    open(component: string, config: any = {}): ng.IPromise<any> {

        let options: any = angular.extend({}, {
            animation: false,
            component
        }, config);

        const modal: any = this.$uibModal.open(options);

        return modal.result.then(data => data);
    }

    confirm(title: string): ng.IPromise<boolean> {

        const options: any = {
            animation: false,
            component: 'ddConfirmModal',
            resolve: {
                title: function (): string {
                    return title;
                }
            }
        };

        const modal: any = this.$uibModal.open(options);

        return modal.result.then(data => data.remove);
    }

};
