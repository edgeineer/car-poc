(function () {

  function DeviceDataSet() {
      function getDeviceDataSet(make, model) {
        console.log(make + model + JSON.stringify({tenant: 'cartos', make: make, model: model}));
        return 'cartos';
      }
      return {
        getDDS: getDeviceDataSet
    }
  }

  angular.module('app')
      .service('CommonDeviceDataSetService', [DeviceDataSet]);
}());