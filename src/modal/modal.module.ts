import * as angular from 'angular';

import 'angular-ui-bootstrap/src/modal/index-nocss.js';
import 'angular-ui-bootstrap/src/position/position.css';
import './modal.less';

import run from './modal.run';

const module: ng.IModule = angular.module('ep.modal', [
  'ngSanitize',
  'ui.bootstrap.modal'
])
  .component('demoModal', {
    template: `<div>
                <button ng-click="vm.openModal()" class="btn btn--primary">Open modal</button>
              </div>`,
    controllerAs: 'vm',
    controller: function ($uibModal) {
      'ngInject';

      this.openModal = () => {
        $uibModal.open({
          template: '<div style="width: 300px; height: 200px; background: white"></div>',
        });
      };
    }
  });

module.run(run);

export default module.name;
