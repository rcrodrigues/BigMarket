(function() {

	var modulo = angular.module('mercadaoModule');

	modulo.service('usuariosService', function($http, $rootScope, config, blockUI) {

		this.createUsuario = function(usuario, successCallback, errorCallback) {
            blockUI.start();
			$http.post(config.BASE_URL + 'usuario', usuario)
				.success(function(data){
                    blockUI.stop();
					if(successCallback)
						successCallback.call(null,data);

				})
				.error(function(data) {
                    blockUI.stop();
					if(!errorCallback)
						$rootScope.$broadcast('showMessageEvent', data, 'danger');
					else
						errorCallback.call(null, data);

				});

		};

		this.getUserEmail = function(username, successCallback, errorCallback) {
            blockUI.start();
			$http.get(config.BASE_URL + 'usuario/' + username + '/email')
				.success(function(data){
                    blockUI.stop();
					if(successCallback)
						successCallback.call(null,data);

				})
				.error(function(data) {
                    blockUI.stop();
					if(!errorCallback)
						$rootScope.$broadcast('showMessageEvent', data, 'danger');
					else
						errorCallback.call(null, data);

				});

		};
     
	});
    
})();