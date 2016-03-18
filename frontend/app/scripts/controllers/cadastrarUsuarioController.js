(function() {

	var modulo = angular.module('mercadaoModule');

	modulo.controller('CadastrarUsuarioController', function($scope, $rootScope, $location, usuariosService) {

		$('#modalLogin').modal('hide');

		$scope.usuario = {};
		$scope.usuario.pessoa = {};

		$scope.createUsuario = function() {

			usuariosService.createUsuario($scope.usuario,

				function(response) {

					if(response.success)
						$scope.$emit('showMessageEvent', response.message, 'success');
					else
						$scope.$emit('showMessageEvent', response.message, 'danger');

				}

			);

		};


	});

})();