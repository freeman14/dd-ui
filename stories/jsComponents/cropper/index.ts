import UIComponentsSection from '../jsComponents.section';

UIComponentsSection.story('Image cropper')
  .add('Image cropper', `<cropper
                    zoom="true"
                    mouse-zoom="false"
                    zoom-buttons="true"
                    viewport="vm.viewport"
                    cropped-image="vm.croppedImage"
                    result-sizes="vm.resultSizes"
                    src="vm.image">
                </cropper>`,
    {
      resultSizes: {
        width: 200,
        height: 200
      },
      viewport: {
        width: 200,
        height: 30
      },
      croppedImage: '',
      image: '/images/dd-sprite-base.png'
    });
