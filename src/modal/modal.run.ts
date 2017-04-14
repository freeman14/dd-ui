export default function runFunc($templateCache: ng.ITemplateCacheService): void {
  'ngInject';

  $templateCache.put('uib/template/modal/window.html',
    `<div class="modal-dialog {{size ? 'modal-' + size : ''}}">
      <div class="modal-dismiss" ng-click="close($event)"></div>
      <div class="modal-content" uib-modal-transclude></div>
    </div>`);
};
