module angularGoogleChart
{
    interface IOnMouseoverDirectiveAttributes extends ng.IAttributes
    {
        agcOnMouseover: string;
    }
    
    function agcOnMouseoverDirective(): ng.IDirective{
        return {
            restrict: 'A',
            scope: false,
            require: 'googleChart',
            link: function(scope, element, attrs: IOnMouseoverDirectiveAttributes, googleChartController){
                callback.$inject = ['args', 'chart', 'chartWrapper'];
                function callback(args, chart, chartWrapper){
                    var returnParams = {
                        chartWrapper: chartWrapper,
                        chart: chart,
                        args: args,
                        column: args[0].column,
                        row: args[0].row
                    };
                    scope.$apply(function () {
                        scope.$eval(attrs.agcOnMouseover, returnParams);
                    });
                }
                googleChartController.registerChartListener('onmouseover', callback, this);
            }
        };
    }
    
    angular.module('googlechart')
        .directive('agcOnMouseover', agcOnMouseoverDirective);
}