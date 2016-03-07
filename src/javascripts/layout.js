var app = angular.module('ops', ['ngRoute', 'opsCtrl']);
var opsCtrl = angular.module('opsCtrl', []);

// 菜单控制器
opsCtrl.controller('NavCtrl', ['$scope', '$location', function ($scope, $location) {
  $scope.changeNav = function (nav) {
    $scope.activeNav = nav;
  };

  var url = $location.url();
  if (url && url != '') {
  	$scope.activeNav = url.substring(1, url.length);
  } else {
  	$scope.activeNav = 'df';
  }
}]);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/df', { templateUrl: 'templates/df.html' })
    .when('/perm777', { templateUrl: 'templates/perm777.html' })
    .when('/apache', { templateUrl: 'templates/apache.html'})
    .when('/awk', { templateUrl: 'templates/awk.html' })
    .otherwise({ templateUrl: 'templates/df.html' });
  }
]);
