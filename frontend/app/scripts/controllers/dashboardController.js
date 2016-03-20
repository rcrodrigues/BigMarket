(function() {

	var modulo = angular.module('mercadaoModule');

	modulo.controller('DashboardController', function($scope, $rootScope, $location, midiasService) {

		$('#modalLogin').modal('hide');

		$scope.productList = {};

		$scope.listProducts = function() {

			midiasService.getAll(function(response) {
				$scope.productList = response;
			});

		};

		$scope.listProducts();

	});

})();