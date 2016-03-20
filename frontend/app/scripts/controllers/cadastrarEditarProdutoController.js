(function() {

	var modulo = angular.module('mercadaoModule');

	modulo.controller('CadastrarEditarProdutoController', function($scope, $rootScope, $routeParams, $location, produtosService, midiasService) {

		$scope.produto = {};
		$scope.creationObject = {};
		$scope.productImage = {resized: {dataURL:null}};
		$scope.isAuthenticated = $rootScope.auth.username !== '' ? true : false;
		$scope.isUpdate = false;

		if($routeParams.produtoId) {
			$scope.isUpdate = true;
		}
		
		$scope.findProduct = function(id) {
            if(id){
                midiasService.find(id, function(response) {
                    $scope.produto = response.produto;
					$scope.productImage.resized.dataURL = response.dado;
                });
            }
		};
		
		if($scope.isAuthenticated)
			$scope.findProduct($routeParams.produtoId);
		
		
		$scope.createProduto = function() {
			
			$scope.creationObject = {
				produto: $scope.produto,
				username: $rootScope.auth.username,
				midia: $scope.productImage.resized.dataURL
			};

			produtosService.createProduto($scope.creationObject,

				function(response) {

					if(response.success) {
						$scope.$emit('showMessageEvent', response.message, 'success', false);
						$location.path('/dashboard');
					} else {
						$scope.$emit('showMessageEvent', response.message, 'danger', false);
					}

				}

			);

		};
		
		$scope.updateProduto = function() {
			
			$scope.creationObject = {
				produto: $scope.produto,
				username: $rootScope.auth.username,
				midia: $scope.productImage.resized.dataURL
			};

			produtosService.updateProduto($scope.creationObject,

				function(response) {

					if(response.success) {
						$scope.$emit('showMessageEvent', response.message, 'success', false);
						$location.path('/dashboard');
					} else {
						$scope.$emit('showMessageEvent', response.message, 'danger', false);
					}

				}

			);

		};

	});

})();