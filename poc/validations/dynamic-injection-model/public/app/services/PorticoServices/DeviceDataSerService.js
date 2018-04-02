(function () {

  function DeviceDataSet() {
      function getDeviceDataSet(make, model) {
        console.log(make + model + JSON.stringify({tenant: 'portico', make: make, model: model}));
        return 'portico';
      }
      return {
        getDDS: getDeviceDataSet
    }
  }

  angular.module('app')
      .service('PorticoDeviceDataSetService', [DeviceDataSet]);
}());