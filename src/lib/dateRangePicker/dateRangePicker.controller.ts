import * as moment from 'moment';
import Moment = moment.Moment;

const DATE_FORMAT: string = 'MM/DD/YYYY';
const DATE_INPUTS: any = {
    FIRST: 'first',
    SECOND: 'second',
};

export class DateRangePickerController {
    public minDate: Moment;
    public maxDate: Moment;
    public linked: boolean;
    public range: { start: Moment, end: Moment };
    public eventDurationRange: { start: Moment, end: Moment };
    public dateRangeApi: any;
    public turn: string;

    public opened: boolean;
    public startDate: string;
    public endDate: string;
    public selectedDate: string;

    public dateInputs: any;

    public onDateRangeChange: (date: any) => any;

    private popover: Element;
    private input: Element;

    // @ngInject
    constructor(private $scope: ng.IScope) {}

    $onInit(): void {
        this.dateInputs = DATE_INPUTS;

        this.opened = false;
        this.startDate = moment().format(DATE_FORMAT);
        this.endDate = moment().format(DATE_FORMAT);

        this.maxDate = moment();
        this.turn = DATE_INPUTS.FIRST;
        this.dateRangeApi = {};
        this.linked = true;

        this.removeDayHighlighting();

        this.popover = document.querySelector('.date-range-picker-popover');
        this.popover.addEventListener('click', this.stopEventPropagation, false);

        this.input = document.querySelector('.date-range-picker-date-btn-group');
        this.input.addEventListener('click', this.stopEventPropagation, false);

        document.body.addEventListener('click', this.closeCalendarOnWindowClick.bind(this), false);
    }

    $onDestroy(): void {
        document.body.removeEventListener('click', this.closeCalendarOnWindowClick.bind(this), false);
        this.popover.removeEventListener('click', this.stopEventPropagation, false);
        this.input.removeEventListener('click', this.stopEventPropagation, false);
    }

    public openCalendar(): void {
        this.opened = true;
    }

    public closeCalendar(): void {
        this.removeDayHighlighting();
        this.opened = false;
    }

    public firstDaySelected(days: { start: Moment, end: Moment }): void {
        this.onDateClick(DATE_INPUTS.SECOND);
        this.startDate = days.start.clone().format(DATE_FORMAT);
        this.endDate = days.end.clone().format(DATE_FORMAT);
        this.onDateRangeChange({ start: days.start.clone(), end: days.end.clone() });
    }

    public secondDaySelected(days: { start: Moment, end: Moment }): void {
        this.startDate = days.start.clone().format(DATE_FORMAT);
        this.endDate = days.end.clone().format(DATE_FORMAT);
        this.onDateRangeChange({ start: days.start.clone(), end: days.end.clone() });
        this.closeCalendar();
    }

    private removeDayHighlighting(): void {
        this.selectedDate = null;
    }

    private onDateClick(day: string): void {
        this.openCalendar();
        this.turn = day;
        this.selectedDate = day;
    }

    private closeCalendarOnWindowClick(): void {
        this.closeCalendar();
        this.$scope.$digest();
    }

    private stopEventPropagation(event: Event): void {
        event.stopPropagation();
    }
}
