(function() {

	var modulo = angular.module('mercadaoModule');

	modulo.controller('CadastrarEditarProdutoController', function($scope, $rootScope, $location, produtosService) {

		$scope.produto = [];

		$scope.createProduto = function() {

			produtosService.createProduto($scope.produto,

				function(sucesso) {

					$scope.$emit('showMessageEvent', sucesso, 'success');

				},
				function(errorMessage) {

					$scope.$emit('showMessageEvent', errorMessage, 'danger');

				}

			);

		};


	});

})();