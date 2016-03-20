(function() {

	var modulo = angular.module('mercadaoModule');

	modulo.service('usuariosService', function($http, $rootScope, config) {

		this.createUsuario = function(usuario, successCallback, errorCallback) {

			$http.post(config.BASE_URL + 'usuario', usuario)
				.success(function(data){

					if(successCallback)
						successCallback.call(null,data);

				})
				.error(function(data) {

					if(!errorCallback)
						$rootScope.$broadcast('showMessageEvent', data, 'danger');
					else
						errorCallback.call(null, data);

				});

		};

		this.getUserEmail = function(username, successCallback, errorCallback) {

			$http.get(config.BASE_URL + 'usuario/' + username + '/email')
				.success(function(data){

					if(successCallback)
						successCallback.call(null,data);

				})
				.error(function(data) {

					if(!errorCallback)
						$rootScope.$broadcast('showMessageEvent', data, 'danger');
					else
						errorCallback.call(null, data);

				});

		};
     
	});
    
})();