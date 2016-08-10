(function() {

	var modulo = angular.module('mercadaoModule');

	modulo.controller('InicialController', function($scope, $rootScope, $location, midiasService) {
		//console.log('teste de console - InicialController');
		$scope.productFilter = {};

		$scope.productList = {};

		$scope.listProducts = function() {

			var filtro = {};

			filtro.nome = $scope.productFilter.nome;
			filtro.preco = $scope.productFilter.preco;

			if($scope.productFilter.troca && $scope.productFilter.venda)
				filtro.aceitaTroca = null;
			else if($scope.productFilter.troca)
				filtro.aceitaTroca = true;
			else if($scope.productFilter.venda)
				filtro.aceitaTroca = false;
			else
				filtro.aceitaTroca = null;

			if($scope.productFilter.novo && $scope.productFilter.usado)
				filtro.novo = null;
			else if($scope.productFilter.novo)
				filtro.novo = true;
			else if($scope.productFilter.usado)
				filtro.novo = false;
			else
				filtro.novo = null;

			midiasService.getAll(filtro, function(response) {
				$scope.productList = response;
			});

		};
        

		$scope.limparFiltro = function(){
			$scope.productFilter = {};
		};

		$scope.listProducts();

	});

})();