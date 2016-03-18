(function() {

	var modulo = angular.module('mercadaoModule');

	modulo.controller('CadastrarUsuarioController', function($scope, $rootScope, $location, usuariosService) {

		$('#modalLogin').modal('hide');

		$scope.usuario = {};
		$scope.usuario.pessoa = {};
		$scope.endereco = {};

		$scope.postInfo = {};

		$scope.createUsuario = function() {

			$scope.postInfo = {
				usuario: $scope.usuario,
				endereco: $scope.endereco
			};

			usuariosService.createUsuario($scope.postInfo,

				function(response) {

					if(response.success) {
						$scope.$emit('showMessageEvent', response.message, 'success');
						$location.path('/inicial');
					} else {
						$scope.$emit('showMessageEvent', response.message, 'danger');
					}

				}

			);

		};


	});

})();