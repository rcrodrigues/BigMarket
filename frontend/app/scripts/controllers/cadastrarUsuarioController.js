(function() {

	var modulo = angular.module('mercadaoModule');

	modulo.controller('CadastrarUsuarioController', function($scope, $http, $rootScope, $location, usuariosService) {

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

		$scope.initCorreioServices = function() {
			
			$.blockUI();
			$http.get('http://viacep.com.br/ws/'+$scope.endereco.cep+'/json/')
				.success( function(data) {
					
					$.unblockUI();
					$scope.endereco.estado = data.uf;
					$scope.endereco.municipio = data.localidade;
					
				})
				.error( function(error) {
					$.unblockUI();
					$scope.$emit('showMessageEvent', error , 'danger');
				});
				
		};
		
		$scope.checkIgualdade = function(){
			if($scope.usuario.senha && $scope.checkSenha){
				if($scope.usuario.senha != $scope.checkSenha){
					$scope.$emit('showMessageEvent','Senha não confere', 'warning');
				}
			}
		};

	});

})();