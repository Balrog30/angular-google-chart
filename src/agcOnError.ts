module angularGoogleChart
{
    interface IOnErrorDirectiveAttributes extends ng.IAttributes
    {
        agcOnError: string;
    }
    
    function onErrorDirective(): ng.IDirective{
        return{
            restrict: 'A',
            scope: false,
            require: 'googleChart',
            link: function(scope, element, attrs: IOnErrorDirectiveAttributes, googleChartController){
                callback.$inject = ['chartWrapper', 'chart', 'args'];
                function callback(chartWrapper, chart, args){
                    var returnValues = {
                        chartWrapper: chartWrapper,
                        chart: chart,
                        args: args,
                        error: args[0],
                        err: args[0],
                        id: args[0].id,
                        message: args[0].message
                    };
                    scope.$apply(function(){
                        scope.$eval(attrs.agcOnError, returnValues);
                    });
                }
                googleChartController.registerWrapperListener('error', callback, this);
            }
        };
    }
    
    angular.module('googlechart')
        .directive('agcOnError', onErrorDirective);
}