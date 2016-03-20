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