import './directives.less';
import { textLimitDirective } from './text-limit/text-limit';
import checkbox from './checkbox/checkbox.directive';
import radiobutton from './radiobutton/radiobutton.directive';

const module: ng.IModule = angular.module('directives', []);

module.directive('textLimit', textLimitDirective);
module.directive('checkbox', checkbox);
module.directive('radioButton', radiobutton);

export default module.name;
