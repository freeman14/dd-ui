interface ISizes {
  width: number;
  height: number;
}

interface ICropperScope extends ng.IScope {
  croppieClass: any;
  viewport: ISizes;
  boundry: ISizes;
  zoom: string | boolean;
  mouseZoom: string | boolean;
  type: string | boolean;
  src: string;
  croppedImage: string;
  resultSizes: ISizes;
  zoomButtons: string;
  zoomStep: string;
  buttonPlus: string;
  buttonMinus: string;
  zoomIncrease(): void;
  zoomDecrease(): void;
}

export class CropperDirective implements ng.IDirective {

  public restrict: string = 'AE';
  public scope: any = {
    src: '<',
    viewport: '<',
    boundry: '<',
    type: '@',
    zoom: '@',
    zoomButtons: '@',
    zoomStep: '@',
    mouseZoom: '@',
    resultSizes: '<',
    croppedImage: '=',
    // For extremal reasons, or tests purposes.
    croppieClass: '='
  };

  private zoomStepDefault: number = 0.1;
  private maxZoomValue: number = 1.5;
  private minZoomValue: number = 0;

  static instance(): ng.IDirectiveFactory {
    const directive: ng.IDirectiveFactory = ($compile: ng.ICompileService) => new CropperDirective($compile);
    directive.$inject = ['$compile'];
    return directive;
  }

  // @ngInject
  constructor(private $compile: ng.ICompileService) {
  }

  public link: ng.IDirectiveLinkFn = (scope: ICropperScope, element: ng.IAugmentedJQuery): void => {

    if (angular.isUndefined(scope.viewport)) {
      scope.viewport = { width: null, height: null };
    }

    if (angular.isUndefined(scope.boundry)) {
      scope.boundry = { width: null, height: null };
    }

    // catches
    scope.viewport.width = scope.viewport.width || 300;
    scope.viewport.height = scope.viewport.height || 300;

    scope.boundry.width = scope.boundry.width || 400;
    scope.boundry.height = scope.boundry.height || 400;

    // viewport cannot be larger than the boundaries

    if (scope.viewport.width > scope.boundry.width) {
      scope.viewport.width = scope.boundry.width;
    }
    if (scope.viewport.height > scope.boundry.height) {
      scope.viewport.height = scope.boundry.height;
    }

    const zoom: boolean = scope.zoom === 'true';
    const mouseZoom: boolean = scope.mouseZoom === 'true';
    const zoomButtons: boolean = scope.zoomButtons === 'true';

    // croppie options
    const options: any = {
      viewport: {
        width: scope.viewport.width,
        height: scope.viewport.height,
        type: scope.type || 'square'
      },
      boundary: scope.boundry,
      showZoomer: zoom,
      mouseWheelZoom: mouseZoom
    };

    /* tslint:disable:no-string-literal */

    const croppie: any = scope.croppieClass || new window['Croppie'](element[0], options);

    let zoomStep: number;

    croppie.options.update = () => {
      return croppie.result({
        type: 'canvas',
        size: scope.resultSizes
      }).then((img: string) => {
        return scope.$apply(() => {
          return scope.croppedImage = img;
        });
      });
    };

    // draw image to crop
    if (scope.src) {
      croppie.bind(scope.src).then(() => {
        // Append zoom shit after image has been rendered.

        if (zoomButtons) {
          const buttonMinus: string = `
                        <button class="zoomControl zoomDecrease" type="button" ng-click="zoomDecrease()"></button>
                    `;
          const buttonPlus: string = `
                        <button class="zoomControl zoomIncrease" type="button" ng-click="zoomIncrease()"></button>
                    `;

          scope.buttonMinus = buttonMinus;
          scope.buttonPlus = buttonPlus;

          const $compiledMinus: ng.IAugmentedJQuery = this.$compile(buttonMinus)(scope);
          const $compiledPlus: ng.IAugmentedJQuery = this.$compile(buttonPlus)(scope);
          const sliderWrapper: Element = document.querySelector('.cr-slider-wrap') || element[0];

          angular.element(sliderWrapper).append($compiledPlus);
          angular.element(sliderWrapper).prepend($compiledMinus);

          if (scope.zoomStep && !isNaN(Number(scope.zoomStep))) {
            zoomStep = Number(scope.zoomStep);
          } else {
            zoomStep = this.zoomStepDefault;
          }

          scope.zoomIncrease = () => {

            let zoomValue: number = this.calculateCurrentZoom(element);
            if (zoomValue < this.maxZoomValue) {
              zoomValue += zoomStep;
              zoomValue = Number(zoomValue.toPrecision(2));
              croppie.setZoom(zoomValue);
            }

            return zoomValue;
          };

          scope.zoomDecrease = () => {

            let zoomValue: number = this.calculateCurrentZoom(element);
            if (zoomValue > this.minZoomValue) {
              zoomValue -= zoomStep;
              zoomValue = Number(zoomValue.toPrecision(2));
              croppie.setZoom(zoomValue);
            }

            return zoomValue;
          };

        }
      });
    }
  };

  // Calculate zoom from scale property, in order to know properly scale value after slider has been scrolled.
  private calculateCurrentZoom(element: ng.IAugmentedJQuery): number {
    let result: number;
    if (element) {
      const scaleImgTransformProp: string = element.find('img').css('transform');

      if (scaleImgTransformProp) {
        if (scaleImgTransformProp.indexOf('scale') > -1) {
          const [, scaleProp] = scaleImgTransformProp.match(/scale\((.*)\)/);
          if (scaleProp) {
            result = Number(Number(scaleProp).toPrecision(2));
          }
        } else if (scaleImgTransformProp.indexOf('matrix') > -1) {
            const transformations: string[] = scaleImgTransformProp.replace('matrix(', '').replace(')', '').split(', ');
            // there are two scale measurements x(transformations[0]) and y(transformations[3]) and they should be the same
            result = Number(Number(transformations[0]).toPrecision(2));
        }
      }
    }

    if (!result) {
      result = 0.1;
    }

    return result;
  }

}
