(function() {
    'use strict';

    angular
        .module('app.viewer', [
        ]);
})();

(function() {
    'use strict';

    angular
        .module('app.viewer')
        .controller('viewCtrl', viewCtrl);

    viewCtrl.$inject = ['$http','$log'];

    /* @ngInject */
    function viewCtrl($http,$log) {
        var $ctrl = this;

        activate();

        $ctrl.filterProjects = filterProjects;

        function activate() {
          $ctrl.data = viewerData;
          $log.info(viewerData);

          $ctrl.groups = $ctrl.data[0];
          $ctrl.projects = $ctrl.data[1];
          $ctrl.tasks = $ctrl.data[2];
        }

        function filterProjects(groupId) {
          var result = {};
          angular.forEach($ctrl.projects,function(project,id) {
            if(project.hasOwnProperty('y') && project.y === groupId) {
              result[id] = project;
            }
          });
          return result;
        }
    }
})();
