import * as angular from 'angular';

import './declare';

import 'ui-storybook/helpers/ng';
import DDUI from './lib/index';

const mainModule = angular.module('sb', [
  'helper',
  DDUI
]);

let preview = document.createElement('preview-helper');
document.body.appendChild(preview);

angular.element(preview)
  .ready(() => {
    angular.bootstrap(preview, [mainModule.name], { strictDi: false });
  });
