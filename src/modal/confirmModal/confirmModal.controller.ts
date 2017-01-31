export default class ConfirmModalController {

    resolve: {
        title: string;
        buttonTitle: string;
    };

    constructor(
        private $scope: any
    ) {
        'ngInject';
    }

    $onInit(): void {
        if (this.resolve && !this.resolve.buttonTitle) {
            this.resolve.buttonTitle = 'Yes';
        }
    }

    confirm(remove: boolean): void {
        this.$scope.$parent.$uibModalInstance.close({ remove });
    }

}
