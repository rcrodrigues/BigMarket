(function() {

	var modulo = angular.module('mercadaoModule');

	modulo.service('produtosService', function($http, $rootScope, config) {

		this.createProduto = function(produto, successCallback, errorCallback) {

			$http.post(config.BASE_URL + 'produto', produto)
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