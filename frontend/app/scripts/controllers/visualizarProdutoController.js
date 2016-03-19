(function() {

	var modulo = angular.module('mercadaoModule');

	modulo.controller('VisualizarProdutoController', function($scope, $rootScope, $location, midiasService) {

		$scope.comentarioInfo = {
			nomeComentarista: null,
			emailComentarista: null,
			comentario:null
		};

		$scope.product = {};

		var idMidiaProduto = $location.search().id;

		$scope.findProduct = function(id) {

			midiasService.find(id, function(response) {
				$scope.product = response;
			});

		};

		$scope.findProduct(idMidiaProduto);

	});

})();