import './directives.less';
import { InputLimit } from './input/limit';


const module: ng.IModule = angular.module('directives', []);

module.directive('textLimit', InputLimit.instance());

export default module.name;
