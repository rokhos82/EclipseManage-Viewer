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

        function activate() {
          $ctrl.data = viewerData;
        }
    }
})();
