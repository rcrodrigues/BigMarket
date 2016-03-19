(function() {

	var modulo = angular.module('mercadaoModule');

	modulo.controller('CadastrarEditarProdutoController', function($scope, $rootScope, $location, produtosService) {

		$scope.produto = {};
		$scope.creationObject = {};

		$scope.createProduto = function() {

			$scope.creationObject = {
				produto: $scope.produto,
				username: $rootScope.auth.username,
				midia: $scope.midia
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

		var handleFileSelect = function(evt) {
			var files = evt.target.files;
			var file = files[0];

			if (files && file) {
				var reader = new FileReader();

				reader.onload = function(readerEvt) {
					var binaryString = readerEvt.target.result;
					$scope.midia = btoa(binaryString);
				};

				reader.readAsBinaryString(file);
			}
		};

		if (window.File && window.FileReader && window.FileList && window.Blob) {
			document.getElementById('imagem').addEventListener('change', handleFileSelect, false);
		} else {
			alert('The File APIs are not fully supported in this browser.');
		}

	});

})();