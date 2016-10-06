/// <reference path="../typings/index.d.ts" /> 

import * as angular from 'angular';
import 'ui-storybook/helpers/ng';
import DDUI from './lib/index';

angular.module('sb', [
    'helper',
    DDUI
]);
