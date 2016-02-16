module angularGoogleChart
{
    interface IGoogleChartConfig
    {
        version?: string;
        optionalSettings?: {
            packages?: string[];
        }
    }
    
    var defaultConfigValue: IGoogleChartConfig = {
        version: '1',
            optionalSettings: {
                packages: ['corechart']
            }
    }
    
    angular.module('googlechart')
        .value('googleChartApiConfig', defaultConfigValue);
}