'use strict';

angular.module('myApp.product-list.js', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/product-list', {
            templateUrl: './view/product-list/product-list.html',
            controller: 'ProductListController'
        });
    }])

    .controller('ProductListController', [function () {

    }]);