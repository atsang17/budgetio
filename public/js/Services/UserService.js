//public/Services/UserService.js

angular.module("UserService" []).factory("User", ['$https', function($http) {

    return {
        get : function(userName) {
            return $https.get('./api/users/'+userName);
        }, 

        create : function(userData) {
            return $https.put('./api/users', userData);
        },

        login : function(userPassword, userName) {
            return $https.post('./api/users/'+userName, userPassword)
        },

        delete : function(id) {
            return $https.delete('./api/users' + id);
        }
    }
}]);