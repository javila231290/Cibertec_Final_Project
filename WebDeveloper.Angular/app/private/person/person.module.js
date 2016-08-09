(function() {

    'use strict';
    angular.module('app')
            .controller('PersonController', personController);

    PersonController.$inject = ['$scope'];

    function PersonController($scope) {
        var vm = this;
        vm.title = "Person Module";
    }

})();