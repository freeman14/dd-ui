/// <reference path="../../index.d.ts" />
import * as angular from 'angular';
import 'ui-storybook/sb';
import 'ui-storybook/stories';

let overview: stotybook.ISection = sb.section('Demo page');
overview.story('Buttons')
  .add('Button with text', '<button ng-bind="vm.text"></button>', { text: 'Demo button' });
