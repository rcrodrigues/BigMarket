(function() {

	var modulo = angular.module('mercadaoModule');

	modulo.controller('InicialController', function($scope, $rootScope, $location, midiasService) {
		//console.log('teste de console - InicialController');
		$scope.produtcFilter = {
			name: null,
			categoria: null,
			preco: null,
			novo: true,
			usado: true,
			venda: true,
			troca: true
		};

		$scope.productList = {};

		$scope.listProducts = function() {

			midiasService.getAll(function(response) {
				$scope.productList = response;
			});

		};

		$scope.listProducts();

	});

})();