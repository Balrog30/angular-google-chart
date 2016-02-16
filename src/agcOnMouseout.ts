module angularGoogleChart
{
    interface IOnMouseoutDirectiveAttributes extends ng.IAttributes
    {
        agcOnMouseout: string;
    }
    
    function agcOnMouseoutDirective(): ng.IDirective{
        return {
            restrict: 'A',
            scope: false,
            require: 'googleChart',
            link: function(scope: ng.IScope, element, attrs: IOnMouseoutDirectiveAttributes, googleChartController){
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
                        scope.$eval(attrs.agcOnMouseout, returnParams);
                    });
                }
                googleChartController.registerChartListener('onmouseout', callback, this);
            }
        };
    }
    
    angular.module('googlechart')
        .directive('agcOnMouseout', agcOnMouseoutDirective);
}