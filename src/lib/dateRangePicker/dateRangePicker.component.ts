import { DateRangePickerController} from './dateRangePicker.controller';

export class DateRangePicker implements ng.IComponentOptions {

    public bindings: { [index: string]: string; };
    public controller: Function;
    public templateUrl: string;
    public controllerAs: string;
    public transclude: boolean;

    constructor() {
        this.controller = DateRangePickerController;
        this.transclude = true;
        this.controllerAs = 'vm';
        this.templateUrl = './app/blocks/dateRangePicker/dateRangePicker.partial.html';
        this.bindings = {
            title: '@titleText',
            onDateRangeChange: '&'
        };
    }

}
