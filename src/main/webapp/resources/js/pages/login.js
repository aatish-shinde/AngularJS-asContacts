(function() {
    
    
    var as = angular.module('asApp.controllers', []);
    
    as.controller('loginController',['$scope', '$location', function ($scope, $location) {
        var url = "" + $location.$$absUrl;
        $scope.displayLoginError = (url.indexOf("error") >= 0);
    }]);
    
}());
