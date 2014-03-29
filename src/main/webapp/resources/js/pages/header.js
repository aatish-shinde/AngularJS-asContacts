(function(){
    
    var as = angular.module('asApp.controllers', []);

    as.controller('LocationController', ['$scope', '$location', function ($scope, $location) {
        if($location.$$absUrl.lastIndexOf('/contacts') > 0){
            $scope.activeURL = 'contacts';
        } else{
            $scope.activeURL = 'home';
        }
    }]);
}());
