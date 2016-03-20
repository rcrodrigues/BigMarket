(function() {

	var modulo = angular.module('mercadaoModule');

	modulo.controller('CadastrarEditarProdutoController', function($scope, $rootScope, $location, produtosService) {

		$scope.produto = {};
		$scope.creationObject = {};
		$scope.productImage = {};

		$scope.createProduto = function() {
			
			$scope.creationObject = {
				produto: $scope.produto,
				username: $rootScope.auth.username,
				midia: $scope.productImage.resized.dataURL
			};

			produtosService.createProduto($scope.creationObject,

				function(response) {

					if(response.success) {
						$scope.$emit('showMessageEvent', response.message, 'success');
						$location.path('/dashboard');
					} else {
						$scope.$emit('showMessageEvent', response.message, 'danger');
					}

				}

			);

		};
		
	});

})();