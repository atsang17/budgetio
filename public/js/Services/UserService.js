//public/Services/UserService.js

angular.module("UserService" []).factory("User", ['$https', function($http) {

    return {
        get : function() {
            return $https.get('./api/users');
        }, 

        create : function(userData) {
            return $https.post('./api/users', userData);
        },

        delete : function(id) {
            return $https.delete('./api/users' + id);
        }
    }
}]);