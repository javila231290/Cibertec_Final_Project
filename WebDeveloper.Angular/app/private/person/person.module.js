(function () {
    'use strict';
    angular.module('app')
           .controller('PersonController', personController);

    personController.$inject = ['$scope', 'personService'];

    function personController($scope, personService) {
        var vm = this;
        vm.title = "Person Module";
        vm.getPerson = getPerson;
        vm.personUpdate = personUpdate;
        vm.personCreate = personCreate;

        init();

        function init() {
            loadData();
        }

        function loadData() {
            personService.getList(1, 10).then(function (data) {
                vm.personList = data;
            });
        }

        function getPerson(id) {
            personService.edit(id).then(function (data) {
                vm.updatePerson = null;
                vm.updatePerson = data;
            });
        }

        function personUpdate(person) {
            if (person) {
                personService.update(person).then(function () {
                    vm.updatePerson = null;
                    closeModal();
                    loadData();
                });
            }
        }

        function personCreate(person) {
            if (person) {
                personService.create(person).then(function (data) {
                    vm.createPerson = null;
                    closeModal();
                    loadData();
                });
            }
        }

        function closeModal() {
            $("button[data-dismiss='modal']").click();
        }
    }
})();