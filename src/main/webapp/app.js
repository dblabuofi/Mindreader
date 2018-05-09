var app = angular.module('myApp', ['ui.bootstrap', 'ngRoute']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/editer', {
	templateUrl: 'templates/editer.html',
	controller: 'editerController'
      }).
      when('/algorithm', {
	templateUrl: 'templates/algorithm.html',
	controller: 'algorithmController'
      }).
      when('/submit', {
	templateUrl: 'templates/submit.html',
	controller: 'submitController'
      }).
      otherwise({
	redirectTo: '/editer'
      });
}]);

app.controller('appController', function ($scope, $uibModal) {
    $scope.Readme = function () {
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'myModalContentReadme.html',
            controller: 'ModalInstanceCtrl',
            resolve: {
            }
        });
        modalInstance.result.then(function () {
        }, function () {
        });
    };
  
    $scope.modalOpen = function () {
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'myModalContentAbout.html',
            controller: 'ModalInstanceCtrl',
            resolve: {
            }
        });
        modalInstance.result.then(function () {
        }, function () {
        });
    };
});

app.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance) {
  $scope.ok = function () {
    $uibModalInstance.close();
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});
app.controller('ModalInstanceCtrlSubmit', function ($scope, $uibModalInstance, $interval) {
  $scope.ok = function () {
    $uibModalInstance.close();
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
  $scope.second = 3;
  
  $interval(function() {
      if (--$scope.second == 0) 
          $scope.ok();
  }, 1000);
});