(function() {

	var modulo = angular.module('mercadaoModule');

	modulo.controller('InicialController', function($scope, $rootScope, $location) {
		//console.log('teste de console - InicialController');
		$scope.procutFilter = {
			name:null
		};

		$scope.productList = [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}];
	});

})();