import './directives.less';
import { InputLimit } from './input/limit';
import checkbox from './checkbox/checkbox.directive';
import radiobutton from './radiobutton/radiobutton.directive';

const module: ng.IModule = angular.module('directives', []);

module.directive('textLimit', InputLimit.instance());
module.directive('checkbox', checkbox);
module.directive('radioButton', radiobutton);

export default module.name;
