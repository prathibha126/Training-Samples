var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider)
{
    $routeProvider
        .when('/',
            {
                templateUrl: 'views/sportbrands.html',
                controller: 'myController'
            })
        .when('/nike',
            {
                templateUrl: 'views/nike.html',
                controller: 'myController'
            })
        .when('/reebok',
            {
                templateUrl: 'views/reebok.html',
                controller: 'myController'
            })
        .when('/adidas',
            {
                templateUrl: 'views/adidas.html',
                controller: 'myController'
            })
        .otherwise(
            {
                redirectTo: '/'
            });
});

app.controller('myController', function ($scope, $location)
{
    $scope.isCollapsed = true;

    //Navigation should be collapsed once the user has clicked on an option (when Navigation button is displayed)
    $scope.$on(
        '$routeChangeSuccess',
        function ()
        {
            $scope.isCollapsed = true;
        }
    );

    $scope.CreatorTagLine = "Responsive WebSite created using Bootstrap and AngularJS";
});

