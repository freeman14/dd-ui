import * as moment from 'moment';
import * as momentTz from 'moment-timezone';

const DATE_FORMAT: string = 'ddd, MMM D, YYYY';
const MONTH_FORMAT: string = 'MMM D, YYYY';
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
    isTimeFormat: boolean;
    isMonthFormat: boolean;
    isSameDate: boolean;

  // @ngInject
  constructor() { }

    $onInit(): void {
      this.dateFormat = this.format || DATE_FORMAT;
      this.processDates(this.start, this.end, this.tz);
    }

    $onChanges(): void {
      this.dateFormat = this.format || DATE_FORMAT;
      this.processDates(this.start, this.end, this.tz);
    }

    private processDates(start: string, end: string, tz: string): void {
      const startMoment: moment.Moment = momentTz.tz(start, tz);
      const endMoment: moment.Moment = momentTz.tz(end, tz);

      const timeMatched = this.dateFormat.match(new RegExp('(,?\s*h:?m*a?)', 'i'));
      this.isTimeFormat = timeMatched && timeMatched.length > 0;

      this.isMonthFormat = this.dateFormat === MONTH_FORMAT;
      this.isSameDate = startMoment.isSame(endMoment, 'day');

      if (this.isTimeFormat) {
        this.dateFormat = this.dateFormat.replace(timeMatched[0], '');
        this.startTimeFormat = this.getTimeFormat(startMoment);
        this.endTimeFormat = this.getTimeFormat(endMoment);
      } else {
        this.startTimeFormat = this.endTimeFormat = this.dateFormat;
      }

      if (this.isMonthFormat) {
        const isSameMonth = startMoment.isSame(endMoment, 'month');
        const isSameYear = startMoment.isSame(endMoment, 'year');
        if (isSameYear && isSameMonth) {
          this.startTimeFormat = this.isSameDate ? MONTH_FORMAT : 'MMM D';
          this.endTimeFormat = 'D, YYYY'
        }
      }
    }

    private getTimeFormat(moment: moment.Moment): string {
      return moment.minutes() > 0 ? TIME_FORMAT : SHORT_TIME_FORMAT;
    }
}
