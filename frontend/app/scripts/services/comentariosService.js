(function() {

	var modulo = angular.module('mercadaoModule');

	modulo.service('comentariosService', function($http, $rootScope, config) {

		this.create = function(comentario, successCallback, errorCallback) {

			$http.post(config.BASE_URL + 'comentario', comentario)
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

		this.getAllByProduct = function(idProduto, successCallback, errorCallback) {

			$http.get(config.BASE_URL + 'produto/' + idProduto + '/comentarios')
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