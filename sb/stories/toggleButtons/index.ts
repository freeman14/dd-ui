let toggleButtons: stotybook.ISection = sb.section('UI components');
toggleButtons.story('Toggle buttons')
  .add('Simple toggle group', `<div class="btn-group demo__card">
        <button class="btn btn-primary" ng-model="vm.radioModel" uib-btn-radio="'Left'">Left</button>
        <button class="btn btn-primary" ng-model="vm.radioModel" uib-btn-radio="'Middle'">Middle</button>
        <button class="btn btn-primary" ng-model="vm.radioModel" uib-btn-radio="'Right'">Right</button>
        <span>{{vm.radioModel | json}}</span>
    </div>`,
    {
      radioModel: 'Left'
    });
