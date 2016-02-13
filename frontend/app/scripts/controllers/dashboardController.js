(function() {

	var modulo = angular.module('mercadaoModule');

	modulo.controller('DashboardController', function($scope, $rootScope, $location) {

		$('#modalLogin').modal('hide');

		$scope.productList = [{},{},{},{},{},{},{}];

	});

})();