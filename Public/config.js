var app = angular.module('myMod');
app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/phrases', {
            controller: 'myCtrl',
            templateUrl: 'phrases.html'
        });
    $locationProvider.hashPrefix('');
})
