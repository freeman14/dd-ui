export default function runFunc($templateCache: ng.ITemplateCacheService): void {
  'ngInject';

  $templateCache.put('uib/template/popover/popover-template.html',
    `<div class="arrow"></div>
		<div class="popover-inner">
			<h3 class="popover-title" ng-bind="uibTitle" ng-if="uibTitle"></h3>
			<div class="popover-content"
				uib-tooltip-template-transclude="contentExp()"
				tooltip-template-transclude-scope="originScope()">
			</div>
		</div>`
  );

  $templateCache.put('uib/template/popover/popover.html',
    `<div class="arrow"></div>
		<div class="popover-inner">
			<h3 class="popover-title" ng-bind="uibTitle" ng-if="uibTitle"></h3>
			<div class="popover-content" ng-bind="content"></div>
		</div>`
  );

  $templateCache.put('uib/template/popover/popover-html.html',
    `<div class="arrow"></div>
		<div class="popover-inner">
			<h3 class="popover-title" ng-bind="uibTitle" ng-if="uibTitle"></h3>
			<div class="popover-content" ng-bind-html="contentExp()"></div>
		</div>`
  );
};
