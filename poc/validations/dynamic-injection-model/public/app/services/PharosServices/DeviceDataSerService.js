(function () {

  function DeviceDataSet() {
      function getDeviceDataSet(make, model) {
        console.log(make + model + JSON.stringify({tenant: 'pharos', make: make, model: model}));
        return 'pharos';
      }
      return {
        getDDS: getDeviceDataSet
    }
  }

  angular.module('app')
      .service('PharosDeviceDataSetService', [DeviceDataSet]);
}());