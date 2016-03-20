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

			if($scope.productFilter.novo && $scope.productFilter.usado)
				filtro.novo = null;
			else if($scope.productFilter.novo)
				filtro.novo = true;
			else if($scope.productFilter.usado)
				filtro.novo = false;

			midiasService.getAll(filtro, function(response) {
				$scope.productList = response;
			});

		};
        
        
        $scope.changeProdutoNovo = function(novo) {
            if(novo){
                $scope.productFilter.usado = !$scope.productFilter.novo;
            } else {
                $scope.productFilter.novo = !$scope.productFilter.usado;
            }
        };
        
        $scope.changeProdutoVenda = function(venda){
            if(venda){
                $scope.productFilter.troca = !$scope.productFilter.venda;
            } else {
                $scope.productFilter.venda = !$scope.productFilter.troca;
            }
        };

		$scope.listProducts();

	});

})();