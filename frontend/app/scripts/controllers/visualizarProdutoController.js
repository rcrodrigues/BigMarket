(function() {

	var modulo = angular.module('mercadaoModule');

	modulo.controller('VisualizarProdutoController', function($scope, $rootScope, $location, midiasService, comentariosService) {

		$scope.comentarioInfo = {
			nomeComentador: null,
			emailComentador: null,
			comentario:null
		};

		$scope.product = {};
		$scope.comentarios = {};

		var idMidiaProduto = $location.search().id;

		$scope.findProduct = function(id) {

			midiasService.find(id, function(response) {
				$scope.product = response;
				$scope.findComentarios($scope.product.produto);
			});

		};

		$scope.findComentarios = function(produto) {

			comentariosService.getAllByProduct(produto.id, function(response) {
				$scope.comentarios = response;
			});

		};

		$scope.createComentario = function() {
			
			$scope.creationObject = {
				idProduto: $scope.product.produto.id,
				comentario: $scope.comentarioInfo
			};

			comentariosService.create($scope.creationObject,

				function(response) {

					if(response.success) {
						$scope.$emit('showMessageEvent', response.message, 'success');
						$scope.findComentarios($scope.product.produto);

						$scope.comentarioInfo = {
							nomeComentador: null,
							emailComentador: null,
							comentario: null
						};

					} else {
						$scope.$emit('showMessageEvent', response.message, 'danger');
					}

				}

			);

		};

		$scope.findProduct(idMidiaProduto);

	});

})();