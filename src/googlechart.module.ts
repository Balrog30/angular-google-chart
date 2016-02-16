/* global angular */
module angularGoogleChart
{
    
        
    registerResizeEvent.$inject = ['$rootScope', '$window'];
    
    function registerResizeEvent($rootScope: ng.IRootScopeService, $window: ng.IWindowService){
        angular.element($window).bind('resize', function () {
                $rootScope.$emit('resizeMsg');
            });
    }
    
    angular.module('googlechart', [])
        .run(registerResizeEvent);
}