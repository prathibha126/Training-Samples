
// Steps:
// First Add Query String Key Name in Routes
// Second Add Query String Value in html file 
// Modify Controller to access query string parameter using $routeParams

var MainModule = angular.module('MainModule', ['ngRoute']);

MainModule.controller('Controller1', function ($scope)
{
    $scope.ControllerName = "Controller which doesn't handle QueryString";
});

MainModule.controller('Controller2', function ($scope, $routeParams)
{
    $scope.ControllerName = "Data Passed in Query String: " + $routeParams.QSParam;
});


MainModule.config(function ($routeProvider)
{
    $routeProvider
        .when('/',
            {
                templateUrl: 'Views/View1.html',
                controller: 'Controller1'
            })
        .when('/View2/:QSParam',
            {
                templateUrl: 'Views/View2.html',
                controller: 'Controller2'
            })
        .otherwise(
            {
                redirectTo: '/'
            })
});

///:firstName/:middleName/:lastName