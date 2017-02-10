import * as moment from 'moment-timezone';

export class TimestampController {
  date: string;
  format: string;
  timezone: string;

  formattedDate: string;

  constructor() { }

  $onInit(): void {
    this.initParams();
    this.formatDate();
  }

  $onChanges(): void {
    this.initParams();
    this.formatDate();
  }

  private initParams(): void {
    this.date = this.date || moment().toISOString();
    this.format = this.format || 'dddd, MMMM Do YYYY, h:mm a';
  }

  private formatDate(): void {
    let date: moment.Moment;

    if (this.timezone) {
      date = moment.tz(this.date, this.timezone);
    } else {
      date = moment(this.date);
    }

    this.formattedDate = date.format(this.format);
  }
}
