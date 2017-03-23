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
				usuario: {},
				endereco: $scope.endereco
			};

			var copiaUsuario = {};
			angular.copy($scope.usuario, copiaUsuario);
			copiaUsuario.senha = CryptoJS.MD5($scope.usuario.senha).toString();
			$scope.postInfo.usuario = copiaUsuario;

			usuariosService.createUsuario($scope.postInfo,

				function(response) {

					if(response.success) {
						$scope.$emit('showMessageEvent', response.message, 'success', false);
						$location.path('/inicial');
					} else {
						$scope.$emit('showMessageEvent', response.message, 'danger', false);
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
						$scope.$emit('showMessageEvent', response, 'danger', false);
					}
				}
				
			);
				
		};
		
		$scope.checkIgualdade = function(){
			if($scope.usuario.senha && $scope.checkSenha){
				if($scope.usuario.senha != $scope.checkSenha){
					$scope.$emit('showMessageEvent','Senha não confere', 'danger');
					$scope.senhaInvalida = true;
				} else {
					$scope.senhaInvalida = false;
				}
			}
		};

	});

})();