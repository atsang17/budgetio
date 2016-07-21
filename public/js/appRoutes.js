//public/approutes.js

angular.module("approutes" []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        
        .when("./", {
            templateUrl : 'views/home.html',
            controller : 'MainController'
        })

        .when("./users", {
            templateUrl : 'views/user.html',
            controller : "UserController"
        });

        $locationProvider.html5mode(true);
}]);