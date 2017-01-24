import * as moment from 'moment';
import * as momentTz from 'moment-timezone';

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
    isTimeFormat: boolean;
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

      const matched = this.dateFormat.match(new RegExp('(,?\s*h:?m*a?)', 'i'));
      this.isTimeFormat = matched && matched.length > 0;

      if (this.isTimeFormat) {
        this.dateFormat = this.dateFormat.replace(matched[0], '');
        this.isSameDate = startMoment.isSame(endMoment, 'day');
        this.startTimeFormat = this.getTimeFormat(startMoment);
        this.endTimeFormat = this.getTimeFormat(endMoment);
      }
    }

    private getTimeFormat(moment: moment.Moment): string {
      return moment.minutes() > 0 ? TIME_FORMAT : SHORT_TIME_FORMAT;
    }
}
