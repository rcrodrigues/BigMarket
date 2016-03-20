(function() {

	var modulo = angular.module('mercadaoModule');

	modulo.service('comentariosService', function($http, $rootScope, config, blockUI) {

		this.create = function(comentario, successCallback, errorCallback) {
            blockUI.start();
			$http.post(config.BASE_URL + 'comentario', comentario)
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

		this.getAllByProduct = function(idProduto, successCallback, errorCallback) {
            blockUI.start();
			$http.get(config.BASE_URL + 'produto/' + idProduto + '/comentarios')
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