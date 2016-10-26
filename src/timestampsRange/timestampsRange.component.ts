import { TimestampsRangeController } from './timestampsRange.controller';

export const timestampsRangeComponent: ng.IComponentOptions = {
    template: require('./timestampsRange.partial.html'),
    controllerAs: 'vm',
    controller: TimestampsRangeController,
    bindings: {
      start: '<',
      end: '<?',
      tz: '<?',
      format: '<?'
    }
};
