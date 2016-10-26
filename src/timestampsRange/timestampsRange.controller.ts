import * as moment from 'moment';
import * as momentTz from 'moment-timezone';
import Moment = moment.Moment;

const DATE_FORMAT: string = 'ddd, MMM D, YYYY';
const TIME_FORMAT: string = 'h:mma';
const SHORT_TIME_FORMAT: string = 'ha';

export class TimestampsRangeController {
    start: string;
    end: string;
    tz: string;
    format: string;

    dateFormat: string;
    startTimeFormat: string;
    endTimeFormat: string;
    isSameDate: boolean;

  // @ngInject
  constructor() { }

    $onInit(): void {
      this.dateFormat = this.format || DATE_FORMAT;
      this.processDates(this.start, this.end, this.tz);
    }

  $onChanges(): void {
    this.processDates(this.start, this.end, this.tz);
  }

    private processDates(start: string, end: string, tz: string): void {
      const startMoment: Moment = momentTz.tz(start, tz);
      const endMoment: Moment = momentTz.tz(end, tz);
      this.isSameDate = startMoment.isSame(endMoment, 'day');
      this.startTimeFormat = this.getTimeFormat(startMoment);
      this.endTimeFormat = this.getTimeFormat(endMoment);
    }

    private getTimeFormat(moment: Moment): string {
      return moment.minutes() > 0 ? TIME_FORMAT : SHORT_TIME_FORMAT;
    }
}
