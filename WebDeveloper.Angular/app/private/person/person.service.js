﻿(function () {
    'use strict';
    var apiUrl = 'http://localhost/WebDeveloper.API/';

    angular.module('app')
        .factory('personService', personService);

    personService.$inject = ['$http'];

    function personService($http) {
        var service = {
            getList: getList,
            edit: edit,
            update: update
        };

        return service;

        function getList(page, size) {
            return $http.get(apiUrl + 'person/list/'
                                    + page + '/rows/'
                                    + size)
                        .then(function (result) {
                            return result.data;
                        },
                        function (error) {
                            console.log(error);
                            return error;
                        });
        }

        function edit(id) {
            return $http.get(apiUrl + 'person/edit/' + id)
                    .then(function (result) {
                        return result.data;
                    },
                        function (error) {
                            console.log(error);
                            return error;
                        });
        }

        function update(person) {
            return $http.post(apiUrl + 'person', person)
                    .then(function (result) {
                        return result.data;
                    },
                        function (error) {
                            console.log(error);
                            return error;
                        });
        }

        function create(person) {
            return $http.put(apiUrl + 'person', person)
                    .then(function (result) {
                        return result.data;
                    },
                        function (error) {
                            console.log(error);
                            return error;
                        });
        }
    }

})();