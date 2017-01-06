/// <reference path="./.config/sb.d.ts" />

import * as angular from 'angular';
import 'ui-storybook/helpers/ng';
import 'angular-sanitize';
import 'ngclipboard';

// SB basic styles
import './style.less';

// DD library
import DDUI from '../src/index';

// DD styles
import '../src/styles';

// Support for hot module reload
// Remove this to turn off auto reload
if (module.hot) {
  module.hot.accept();
}

const mainModule: ng.IModule = angular.module('sb', [
  'helper',
  'ngclipboard',
  DDUI
]);

// If we have old app remove it
let oldAll: Element = document.getElementsByTagName('preview-helper')[0];
if (oldAll) {
  oldAll.remove();
}

let preview: HTMLElement = document.createElement('preview-helper');
document.body.appendChild(preview);

angular.element(preview)
  .ready(() => {
    angular.bootstrap(preview, [mainModule.name], { strictDi: false });
  });
