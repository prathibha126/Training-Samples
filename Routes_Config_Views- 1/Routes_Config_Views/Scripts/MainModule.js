var MainModule = angular.module('MainModule', ['ngRoute']);

MainModule.controller('Controller1', function ($scope)
{
    var d = new Date(Date.now()-5);
    $scope.ControllerName = "Controller Name: Controller1 - " + d;
});

MainModule.controller('Controller2', function ($scope)
{
    var d = new Date(Date.now());
    $scope.ControllerName = "Controller Name: Controller2 - " + d;
});

MainModule.config(function ($routeProvider)
{
    $routeProvider
        .when('/',
            {
                templateUrl: 'Views/View1.html',
                controller: 'Controller1'
            })
        .when('/View2',
            {
                templateUrl: 'Views/View2.html',
                controller: 'Controller1'
            })
        .when('/View3',
            {
                templateUrl: 'Views/View3.html',
                controller: 'Controller2'
            })
        .otherwise(
            {
                redirectTo: '/'
            })
});

