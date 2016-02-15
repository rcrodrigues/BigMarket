(function() {

	var modulo = angular.module('mercadaoModule');

	modulo.controller('VisualizarProdutoController', function($scope, $rootScope, $location) {

		$scope.comentarioInfo = {
			nomeComentarista: null,
			emailComentarista: null,
			comentario:null
		};

	});

})();