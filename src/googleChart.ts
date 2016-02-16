module angularGoogleChart
{
    googleChartDirective.$inject = [];
        
    function googleChartDirective(): ng.IDirective {

        return {
            restrict: 'A',
            scope: false,
            controller: 'GoogleChartController'
        };
    }
    
    angular.module('googlechart')
        .directive('googleChart', googleChartDirective);
}
