angular.module('validationApp', [])
  .controller('mainController', ['$scope', function($scope) {
    $scope.user = {
      login: '',
      password: '',
      confirm_password: '',
      phone: '',
      email: ''
    };
  }]);
