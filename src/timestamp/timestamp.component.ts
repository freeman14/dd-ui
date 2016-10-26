import { TimestampController } from './timestamp.controller';

export const timestampComponent: ng.IComponentOptions = {
  controller: TimestampController,
  controllerAs: 'vm',
  template: require('./timestamp.partial.html'),
  bindings: {
    date: '<',
    format: '<?',
    timezone: '<?'
  }
};
