module angularGoogleChart
{
    interface IOnSelectDirectiveAttributes extends ng.IAttributes
    {
        agcOnSelect: string;
    }   
    function onSelectDirective(): ng.IDirective{
        return {
            restrict: 'A',
            scope: false,
            require: 'googleChart',
            link: function(scope, element, attrs: IOnSelectDirectiveAttributes, googleChartController){
                callback.$inject = ['chartWrapper', 'chart'];
                function callback(chartWrapper, chart){
                    var selectEventRetParams: any = { selectedItems: chart.getSelection() };
                    // This is for backwards compatibility for people using 'selectedItem' that only wanted the first selection.
                    selectEventRetParams.selectedItem = selectEventRetParams.selectedItems[0];
                    selectEventRetParams.chartWrapper = chartWrapper;
                    selectEventRetParams.chart = chart;
                    scope.$apply(function () {
                        scope.$eval(attrs.agcOnSelect, selectEventRetParams);
                    });
                }
                googleChartController.registerWrapperListener('select', callback, this);
            }
        };
    }
    
    angular.module('googlechart')
        .directive('agcOnSelect', onSelectDirective);
}