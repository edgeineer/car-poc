(function () {
  var app = angular.module('app')
      .constant('serviceConfigurator', {
          "Controllers": {
            "AssetPropertyController": [
              "CommonDeviceDataSetService"
            ]
          }
      });
}());