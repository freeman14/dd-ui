export default function run($templateCache: ng.ITemplateCacheService): void {
    'ngInject';

    $templateCache.put('uib/template/tabs/tabset.html',
        `<div>
            <ul class="nav dd__{{tabset.type || 'tabs'}}" ng-transclude></ul>
            <div class="dd__tab-content">
                <div class="dd__content-item"
                    ng-repeat="tab in tabset.tabs"
                    ng-class="{active: tabset.active === tab.index}"
                    uib-tab-content-transclude="tab">
                </div>
            </div>
        </div>`);

    $templateCache.put('uib/template/tabs/tab.html',
        `<li ng-class="[{active: active, disabled: disabled}, classes]" class="dd__tab-item">
            <a href ng-click="select($event)" class="nav-link" uib-tab-heading-transclude>{{heading}}</a>
        </li>`);

};
