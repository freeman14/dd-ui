// @ngInject
export default function runFunc($templateCache: ng.ITemplateCacheService): void {

  $templateCache.put('uib/template/modal/window.html',
    `<div class="modal-dialog {{size ? 'modal-' + size : ''}}">
      <div class="modal-content" uib-modal-transclude></div>
    </div>`);
};
