export default function runFunc($templateCache: ng.ITemplateCacheService): void {
  'ngInject';

  $templateCache.put("./errorPage/error.partial.html",
    `<div class="dd__error__page">
      <header class="error-page-header">
        <div class="error-page-img-logo dd-image-doubledutch" ng-click="vm.goToOrigin()"></div>
        <span class="error-page-header-link" ng-bind="vm.config.helpLink" ng-click="vm.goToLink(vm.config.helpLinkUrl)"></span>
      </header>
      <div class="error-page-container">
        <span class="error-page-icon dd-image-error" aria-hidden="true"></span>
        <h1 class="error-page-title" ng-bind="vm.config.title"></h1>
        <h5 class="error-page-message" ng-bind="vm.config.message"></h5>
        <div class="error-page-footer">
          <span class="error-page-link" ng-bind="vm.config.reloadLink" ng-click="vm.reload()"></span>
          <span class="error-page-splitter"></span>
          <span class="error-page-link" ng-bind="vm.config.supportLink" ng-click="vm.mailto(vm.config.supportLinkEmail, vm.config.supportEmailSubject)"></span>
        </div>
      </div>
    </div>`);

  $templateCache.put("./errorPage/maintenance.partial.html",
    `<div class="dd__error__page">
      <header class="error-page-header">
        <div class="error-page-img-logo dd-image-doubledutch" ng-click="vm.goToOrigin()"></div>
        <span class="error-page-header-link" ng-bind="vm.config.helpLink" ng-click="vm.goToLink(vm.config.helpLinkUrl)"></span>
      </header>
      <div class="error-page-container">
        <span class="error-page-icon dd-image-maintenance" aria-hidden="true"></span>
        <h1 class="error-page-title" ng-bind="vm.config.title"></h1>
        <h5 class="error-page-message" ng-bind="vm.config.message"></h5>
      </div>
    </div>`);

  $templateCache.put("./errorPage/notFound.partial.html",
    `<div class="dd__error__page">
      <header class="error-page-header">
        <div class="error-page-img-logo dd-image-doubledutch" ng-click="vm.goToOrigin()"></div>
        <span class="error-page-header-link" ng-bind="vm.config.helpLink" ng-click="vm.goToLink(vm.config.helpLinkUrl)"></span>
      </header>
      <div class="error-page-container">
        <span class="error-page-icon dd-image-404" aria-hidden="true"></span>
        <h1 class="error-page-title" ng-bind="vm.config.title"></h1>
        <h5 class="error-page-message" ng-bind="vm.config.message"></h5>
        <div class="error-page-footer">
          <span class="error-page-link" ng-bind="vm.config.eventContentLink" ng-click="vm.goToLink(vm.config.eventContentLinkUrl)"></span>
          <span class="error-page-splitter"></span>
          <span class="error-page-link" ng-bind="vm.config.eventLayoutLink" ng-click="vm.goToLink(vm.config.eventLayoutLinkUrl)"></span>
        </div>
       </div>
    </div>`);
};
