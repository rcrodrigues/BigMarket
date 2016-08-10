(function() {

	var modulo = angular.module('mercadaoModule');

	modulo.controller('DashboardController', function($scope, $rootScope, $location, midiasService) {

		$('#modalLogin').modal('hide');

		$scope.productList = {};

		$scope.listProducts = function() {

			midiasService.getAllByUser($rootScope.auth.username, function(response) {
				$scope.productList = response;
			});

		};

		$scope.listProducts();

		$scope.confirmarRemocao = function(produto) {

			$scope.produtoSelecionado = produto;
			$('#modalRemoverProduto').modal('show');

		};

		$scope.deleteProduct = function(produto) {

			midiasService.delete(produto.id, function(response) {
				if(response.success) {

					$scope.$emit('showMessageEvent', response.message, 'success', false);
					$scope.listProducts();

				} else {

					$scope.$emit('showMessageEvent', response.message, 'danger', false);

				}
			});
		};
	});

})();