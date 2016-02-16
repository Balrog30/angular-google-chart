module angularGoogleChart
{
    interface IOnClickDirectiveAttributes extends ng.IAttributes
    {
        agcOnClick: string;
    }
    
    function onClickDirective(): ng.IDirective
    {
        return {
            restrict: 'A',
            scope: false,
            require: 'googleChart',
            link: function(scope: ng.IScope, element, attrs: IOnClickDirectiveAttributes, googleChartController){
                callback.$inject = ['args', 'chart', 'chartWrapper'];
                function callback(args, chart, chartWrapper){
                    scope.$apply(function (){
                        scope.$eval(attrs.agcOnClick, {args: args, chart: chart, chartWrapper: chartWrapper});
                    });
                }
                googleChartController.registerChartListener('click', callback, this);
            }
        };
    }
    
    angular.module('googlechart')
        .directive('agcOnClick', onClickDirective);
}
