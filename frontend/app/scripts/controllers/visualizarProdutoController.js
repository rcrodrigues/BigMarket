(function() {

	var modulo = angular.module('mercadaoModule');

	modulo.controller('VisualizarProdutoController', function($scope, $routeParams, $rootScope, $location, midiasService) {

		$scope.comentarioInfo = {
			nomeComentarista: null,
			emailComentarista: null,
			comentario:null
		};
        
        $scope.isAuthenticated = false;
		$scope.product = {};
        
		$scope.findProduct = function(id) {
            if(id){
                midiasService.find(id, function(response) {
                    $scope.product = response;
                });
            }
		};

		$scope.findProduct($routeParams.produtoId);

	});

})();