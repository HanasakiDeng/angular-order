'use strict';

angular.module('myApp.login', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: './view/login/login.html',
            controller: 'LoginController'
        });
    }])
    .controller('LoginController', [function () {

    }]);