import UIComponentsSection from '../jsComponents.section';

const template: string = require('./template.partial.html');

UIComponentsSection.story('Toggle buttons')
  .add('Simple toggle group', template,
  {
    radioModel: 'Left'
  });
