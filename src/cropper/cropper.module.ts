import * as angular from 'angular';
import 'croppie';
import 'croppie/croppie.css';

import { CropperDirective } from './cropper.directive';

const module: ng.IModule = angular.module('dd-ui.cropper', []);

module.directive('cropper', CropperDirective.instance());

export default module.name;
