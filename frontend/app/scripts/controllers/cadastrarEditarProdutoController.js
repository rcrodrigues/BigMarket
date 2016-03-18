(function() {

	var modulo = angular.module('mercadaoModule');

	modulo.controller('CadastrarEditarProdutoController', function($scope, $rootScope, $location, produtosService) {

		$scope.produto = [];

		$scope.createProduto = function() {

			produtosService.createProduto($scope.produto,

				function(response) {

					if(response.success)
						$scope.$emit('showMessageEvent', response.message, 'success');
					else
						$scope.$emit('showMessageEvent', response.message, 'danger');

				}

			);

		};


	});

})();