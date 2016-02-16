module angularGoogleChart
{
    interface IOnReadyDirectiveAttributes extends ng.IAttributes
    {
        agcOnReady: string;
    }
    
    function onReadyDirective(): ng.IDirective{
        return {
            restrict: 'A',
            scope: false,
            require: 'googleChart',
            link: function(scope, element, attrs: IOnReadyDirectiveAttributes, googleChartController){
                callback.$inject=['chartWrapper'];
                function callback(chartWrapper){
                    scope.$apply(function (){
                        scope.$eval(attrs.agcOnReady, {chartWrapper: chartWrapper});
                    });
                }
                googleChartController.registerWrapperListener('ready', callback, this);
            }
        };
    }
    
    angular.module('googlechart')
        .directive('agcOnReady', onReadyDirective);
}
