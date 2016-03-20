(function() {

	var modulo = angular.module('mercadaoModule');

	modulo.controller('InicialController', function($scope, $rootScope, $location, midiasService) {
		//console.log('teste de console - InicialController');
		$scope.productFilter = {};

		$scope.productList = {};

		$scope.listProducts = function() {

			var filtro = {
				nome: $scope.productFilter.nome,
				preco: $scope.productFilter.preco,
				aceitaTroca: $scope.productFilter.troca ? true : null,
				novo: $scope.productFilter.novo ? true : null
			};

			midiasService.getAll(filtro, function(response) {
				$scope.productList = response;
			});

		};

		$scope.listProducts();

		$scope.viewProduct = function(produto) {

			$location.path("/visualizarProduto").search('id', produto.id);

		};


	});

})();