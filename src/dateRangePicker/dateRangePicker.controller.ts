import * as moment from 'moment';
import * as angular from 'angular';
import Moment = moment.Moment;

const DATE_INPUTS: any = {
  FIRST: 'first',
  SECOND: 'second',
};

export class DateRangePickerController {
  public minDate: Moment;
  public maxDate: Moment;
  public linked:boolean;
  public range: { start: Moment | Date, end: Moment | Date };
  public eventDurationRange: { start: Moment, end: Moment };
  public dateRangeApi:any;
  public turn:string;

  public api: { close: () => void };
  public onDateRangeChange:(date: any) => any;

  public opened: boolean;
  public selectedDate: string;

  public dateInputs: any;

  private popover: Element;
  private input: Element;

  // @ngInject
  constructor(private $scope: ng.IScope) {
  }

  $onInit(): void {
    this.dateInputs = DATE_INPUTS;

    this.opened = false;

    this.maxDate = moment();
    this.turn = DATE_INPUTS.FIRST;
    this.dateRangeApi = {};
    this.linked = true;

    this.removeSelection();

    this.api = {
      close: this.closeCalendar.bind(this)
    };

    this.popover = document.querySelector('.date-range-picker-popover');
    this.popover.addEventListener('click', this.stopEventPropagation, false);

    this.input = document.querySelector('.date-range-picker-date-btn-group');
    this.input.addEventListener('click', this.stopEventPropagation, false);

    document.body.addEventListener('click', this.closeCalendarOnWindowClick.bind(this), false);
  }

  $onChanges(changes: any): void {
    if (changes.eventDurationRange && changes.eventDurationRange.currentValue) {
      this.eventDurationRange.start = moment(angular.extend({}, changes.eventDurationRange.currentValue.start));
      this.eventDurationRange.end = moment(angular.extend({}, changes.eventDurationRange.currentValue.end));
    }

    if (changes.range && changes.range.currentValue) {
      this.range.start = moment(angular.extend({}, changes.range.currentValue.start));
      this.range.end = moment(angular.extend({}, changes.range.currentValue.end));
    }

    if (changes.range || changes.eventDurationRange) {
      this.updateCalendar();
    }
  }

  $onDestroy(): void {
    document.body.removeEventListener('click', this.closeCalendarOnWindowClick.bind(this), false);
    this.popover.removeEventListener('click', this.stopEventPropagation, false);
    this.input.removeEventListener('click', this.stopEventPropagation, false);
  }

  public openCalendar():void {
    this.opened = true;
  }

  public closeCalendar(): void {
    this.removeSelection();
    this.opened = false;
  }

  public firstDaySelected(days:{ start: Moment, end: Moment }): void {
    this.onDateClick(DATE_INPUTS.SECOND);
    this.onDateRangeChange({ start: days.start.clone(), end: days.end.clone()});
  }

  public secondDaySelected(days: { start: Moment, end: Moment }): void {
    this.onDateRangeChange({ start: days.start.clone(), end: days.end.clone() });
    this.closeCalendar();
  }

  private removeSelection(): void {
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

  private updateCalendar(): void {
    // TODO
    // Need to six it inside DP library
    try {
      this.dateRangeApi.render();
    } catch (e) {
      setTimeout(() => this.dateRangeApi.render(), 0);
    }
  }

  private stopEventPropagation(event:Event): void {
    event.stopPropagation();
  }
}
