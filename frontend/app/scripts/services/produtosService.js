(function() {

	var modulo = angular.module('mercadaoModule');

	modulo.service('produtosService', function($http, $rootScope, config, blockUI) {

		this.createProduto = function(produto, successCallback, errorCallback) {
            blockUI.start();
			$http.post(config.BASE_URL + 'produto', produto)
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

		this.updateProduto = function(produto, successCallback, errorCallback) {
            blockUI.start();
			$http.post(config.BASE_URL + 'produto/update', produto)
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