import './directives.less';
import { InputLimit } from './input/limit';
import checkbox from './checkbox/checkbox.directive';

const module: ng.IModule = angular.module('directives', []);

module.directive('textLimit', InputLimit.instance());
module.directive('checkbox', checkbox);

export default module.name;
