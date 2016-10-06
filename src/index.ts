import * as angular from 'angular';
import 'ui-storybook/helpers/ng';
import components from './lib/index';

angular.module('dd-ui', [
    'helper',
    components
]);
