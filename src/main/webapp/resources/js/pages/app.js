(function() {

    as = angular.module('asApp', [asApp.controllers']);
    
    as.value('version', '1.0');
    as.value('asApiUrl', '');
    as.config(function($routeProvider, $httpProvider) {
        
    });
    
}());
