module angularGoogleChart
{
    interface IOnReadyDirectiveAttributes extends ng.IAttributes
    {
        agcBeforeDraw: string;
    }
        
    function onReadyDirective(): ng.IDirective{
        return {
            restrict: 'A',
            scope: false,
            require: 'googleChart',
            link: function(scope: ng.IScope, element, attrs: IOnReadyDirectiveAttributes, googleChartController){
                callback.$inject=['chartWrapper'];
                function callback(chartWrapper){
                    scope.$apply(function (){
                        scope.$eval(attrs.agcBeforeDraw, {chartWrapper: chartWrapper});
                    });
                }
                googleChartController.registerServiceListener('beforeDraw', callback, this);
            }
        };
    }
    
    angular.module('googlechart')
        .directive('agcBeforeDraw', onReadyDirective);
}