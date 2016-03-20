(function() {

	var modulo = angular.module('mercadaoModule');

	modulo.controller('VisualizarProdutoController', function($scope, $routeParams, $rootScope, $location, midiasService, comentariosService, usuariosService) {

		$scope.comentarioInfo = {
			nomeComentador: null,
			emailComentador: null,
			comentario:null
		};
		
		$scope.isAuthenticated = false;
		$scope.product = {};
		
		$scope.findProduct = function(id) {
			if(id){
				midiasService.find(id, function(response) {
					$scope.product = response;
					$scope.findComentarios($scope.product.produto);
					getUserEmail();
				});
			}
		};
		
		$scope.findProduct($routeParams.produtoId);
		
		$scope.comentarios = {};

		var idMidiaProduto = $location.search().id;

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

		var getUserEmail = function() {

			usuariosService.getUserEmail($scope.product.produto.id, function(response) {
				$scope.userEmail = response.email;
			});
		};

	});

})();