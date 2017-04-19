export default function runFunc($templateCache: ng.ITemplateCacheService): void {
  'ngInject';

  $templateCache.put('selectize/match.tpl.html',
    `<div ng-hide="$select.searchEnabled && $select.isEmpty()" class="ui-select-match">
      <span ng-show="!$select.searchEnabled && ($select.isEmpty() || $select.open)" class="ui-select-placeholder text-muted">{{$select.placeholder}}</span>
      <span ng-hide="$select.isEmpty() || $select.search" ng-transclude></span>
     </div>`
  );
};
