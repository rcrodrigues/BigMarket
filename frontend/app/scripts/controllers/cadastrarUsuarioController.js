(function() {

	var modulo = angular.module('mercadaoModule');

	modulo.controller('CadastrarUsuarioController', function($scope, $http, $rootScope, $location, usuariosService, correiosServices) {

		$('#modalLogin').modal('hide');

		$scope.usuario = {};
		$scope.usuario.pessoa = {};
		$scope.endereco = {};
		$scope.senhaInvalida = true;

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

		$scope.initCorreioServices = function() {
			
			correiosServices.checkCEP($scope.endereco.cep,
			
				function(response){
					
					if(!response.erro){
						$scope.endereco.estado = response.uf;
						$scope.endereco.municipio = response.localidade;
					} else {
						$scope.$emit('showMessageEvent', response, 'danger');
					}
				}
				
			);
				
		};
		
		$scope.checkIgualdade = function(){
			if($scope.usuario.senha && $scope.checkSenha){
				if($scope.usuario.senha != $scope.checkSenha){
					$scope.$emit('showMessageEvent','Senha não confere', 'warning');
					$scope.senhaInvalida = true;
				} else {
					$scope.senhaInvalida = false;
				}
			}
		};

	});

})();