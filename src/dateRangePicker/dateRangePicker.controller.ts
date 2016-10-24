import * as moment from 'moment';
import * as angular from 'angular';
import Moment = moment.Moment;

const DATE_INPUTS: any = {
  FIRST: 'first',
  SECOND: 'second',
};

const KEY: any = {
  RIGHT: 39,
  LEFT: 37,
  ESC: 27
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
  private isHotKeysOn: boolean;
  private hotKeysHandlerFunc: EventListener;
  private closeCalendarFunc: EventListener;

  constructor(private $scope: ng.IScope) {
    'ngInject';
  }

  $onInit(): void {
    this.dateInputs = DATE_INPUTS;

    this.opened = false;
    this.isHotKeysOn = false;
    this.hotKeysHandlerFunc = this.handleHotKeys.bind(this);
    this.closeCalendarFunc = this.closeCalendarOnWindowClick.bind(this);

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

    document.body.addEventListener('click', this.closeCalendarFunc, false);
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
    document.body.removeEventListener('click', this.closeCalendarFunc, false);
    this.popover.removeEventListener('click', this.stopEventPropagation, false);
    this.input.removeEventListener('click', this.stopEventPropagation, false);
  }

  public openCalendar():void {
    this.opened = true;
    this.turnOnHotKeys();
  }

  public closeCalendar(): void {
    this.removeSelection();
    this.opened = false;
    this.turnOffHotKeys();
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

  private turnOnHotKeys(): void {
    if (!this.isHotKeysOn) {
      document.body.addEventListener('keyup', this.hotKeysHandlerFunc, false);
      this.isHotKeysOn = true;
    }
  }

  private turnOffHotKeys(): void {
    if (this.isHotKeysOn) {
      document.body.removeEventListener('keyup', this.hotKeysHandlerFunc, false);
      this.isHotKeysOn = false;
    }
  }

  private handleHotKeys(e: KeyboardEvent): void {
    const key: number = e.keyCode;
    if (e.altKey) {
      if (key === KEY.RIGHT) {
        this.onDateClick(DATE_INPUTS.SECOND);
        this.$scope.$digest();
      } else if (key === KEY.LEFT) {
        this.onDateClick(DATE_INPUTS.FIRST);
        this.$scope.$digest();
      }
    } else if (key === KEY.ESC) {
      this.closeCalendarOnWindowClick();
    }
  }

  private stopEventPropagation(event: Event): void {
    event.stopPropagation();
  }
}
