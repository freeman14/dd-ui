import UIComponentsSection from '../jsComponents.section';

const template: string = require('./template.partial.html');

UIComponentsSection.story('Carousel')
  .add('Simple carousel', template,
  {
    interval: 5000,
    noWrapSlides: false,
    active: 0,
    slides: [
      {
        image: 'http://lorempixel.com/600/300/nature',
        text: 'Nice image',
        id: 0,
        clicked: false
      },
      {
        image: 'http://lorempixel.com/601/300/nature',
        text: 'Awesome photograph',
        id: 1,
        clicked: false
      },
      {
        image: 'http://lorempixel.com/602/300/nature',
        text: 'That is so cool',
        id: 2,
        clicked: false
      },
      {
        image: 'http://lorempixel.com/603/300/nature',
        text: 'I love that',
        id: 3,
        clicked: false
      }
    ]
  });
