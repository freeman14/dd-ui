export default function runFunc($templateCache: ng.ITemplateCacheService): void {
  'ngInject';

  $templateCache.put("./errorPage/error.partial.html",
    `<header class="app-header error-page">
      <div class="img-logo dd-image-doubledutch" ng-click="vm.goToOrigin()"></div>
      <span class="header-link" ng-bind="vm.config.helpLink" ng-click="vm.goToLink(vm.config.helpLinkUrl)"></span>
    </header>
    <div class="app-error-container">
      <span class="app-error-icon dd-image-error" aria-hidden="true"></span>
      <h1 class="app-error-title" ng-bind="vm.config.title"></h1>
      <h5 class="app-error-message" ng-bind="vm.config.message"></h5>
      <div class="app-error-footer">
        <span class="app-error-link" ng-bind="vm.config.reloadLink" ng-click="vm.reload()"></span>
        <span class="app-error-splitter"></span>
        <span class="app-error-link" ng-bind="vm.config.supportLink" ng-click="vm.mailto(vm.config.supportLinkEmail, vm.config.supportEmailSubject)"></span>
      </div>
    </div>`);

  $templateCache.put("./errorPage/maintenance.partial.html",
    `<header class="app-header error-page">
      <div class="img-logo dd-image-doubledutch" ng-click="vm.goToOrigin()"></div>
      <span class="header-link" ng-bind="vm.config.helpLink" ng-click="vm.goToLink(vm.config.helpLinkUrl)"></span>
    </header>
    <div class="app-error-container">
      <span class="app-error-icon dd-image-maintenance" aria-hidden="true"></span>
      <h1 class="app-error-title" ng-bind="vm.config.title"></h1>
      <h5 class="app-error-message" ng-bind="vm.config.message"></h5>
    </div>`);

  $templateCache.put("./errorPage/notFound.partial.html",
    `<header class="app-header error-page">
      <div class="img-logo dd-image-doubledutch" ng-click="vm.goToOrigin()"></div>
      <span class="header-link" ng-bind="vm.config.helpLink" ng-click="vm.goToLink(vm.config.helpLinkUrl)"></span>
    </header>
    <div class="app-error-container">
      <span class="app-error-icon dd-image-404" aria-hidden="true"></span>
      <h1 class="app-error-title" ng-bind="vm.config.title"></h1>
      <h5 class="app-error-message" ng-bind="vm.config.message"></h5>
      <div class="app-error-footer">
        <span class="app-error-link" ng-bind="vm.config.eventContentLink" ng-click="vm.goToLink(vm.config.eventContentLinkUrl)"></span>
        <span class="app-error-splitter"></span>
        <span class="app-error-link" ng-bind="vm.config.eventLayoutLink" ng-click="vm.goToLink(vm.config.eventLayoutLinkUrl)"></span>
      </div>
    </div>`);
};
