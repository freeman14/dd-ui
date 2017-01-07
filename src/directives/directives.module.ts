import './directives.less';
import { textLimitDirective } from './text-limit/text-limit';
import checkbox from './checkbox/checkbox.directive';
import radiobutton from './radiobutton/radiobutton.directive';
import { toggleDirective } from './toggle/toggle.directive';

const module: ng.IModule = angular.module('directives', []);

module.directive('textLimit', textLimitDirective);
module.directive('checkbox', checkbox);
module.directive('radioButton', radiobutton);
module.directive('toggle', toggleDirective);

export default module.name;
