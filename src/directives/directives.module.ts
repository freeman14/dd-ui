import './directives.less';
import { textLimitDirective } from './text-limit/text-limit';
import checkbox from './checkbox/checkbox.directive';
import radiobutton from './radiobutton/radiobutton.directive';
import { toggleDirective } from './toggle/toggle.directive';
import { DropdownElement, DropdownTemplate } from './dropdown/dropdown.directive';
import { formInput } from './form-input/form-input.directive';

const module: ng.IModule = angular.module('directives', []);

module.directive('textLimit', textLimitDirective);
module.directive('checkbox', checkbox);
module.directive('radioButton', radiobutton);
module.directive('toggle', toggleDirective);
module.directive('formInput', formInput);

module.directive('dropdown', DropdownElement);
module.directive('ddDropdown', DropdownTemplate);

export default module.name;
