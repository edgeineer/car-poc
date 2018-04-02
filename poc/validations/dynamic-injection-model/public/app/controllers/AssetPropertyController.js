(function () {

  var app = angular.module('app')
      .controller('AssetPropertyController', ['$scope', '$injector', 'Configuration', 'serviceConfigurator', function AssetPropertyController($scope, $injector, Configuration,
                                                                                                                                              serviceConfigurator) {
        console.log("AssetPropertyController - instantiated !!!");

        //dynamically injecting services -- STARTS HERE --
        var services = {}, DeviceDataSource, MasterLookupService;
        function explicit(DeviceDataSetService) {
          services = {
            DeviceDataSetService: DeviceDataSetService,
            MasterLookupService: 'MasterLookupService'
          }
        }
        explicit.$inject = serviceConfigurator.Controllers.AssetPropertyController;
        $injector.invoke(explicit);
        DeviceDataSource = services.DeviceDataSetService;
        MasterLookupService = services.MasterLookupService;

        $scope.nameAt = "Dave";

        console.log("Testing DeviceDataSetService");

        //validations goes here
        var nameAt = DeviceDataSource.getDDS('abc...', 'zxy...');
        $scope.nameAt = nameAt ? nameAt : $scope.nameAt;
      }]);

}());