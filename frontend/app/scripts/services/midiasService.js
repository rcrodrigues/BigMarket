(function() {

	var modulo = angular.module('mercadaoModule');

	modulo.service('midiasService', function($http, $rootScope, config, blockUI) {

		this.getAll = function(filtro, successCallback, errorCallback) {
            blockUI.start();
			$http.post(config.BASE_URL + 'midias', filtro)
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

		this.getAllByUser = function(username, successCallback, errorCallback) {
            blockUI.start();
			$http.get(config.BASE_URL + 'midias/' + username)
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

		this.find = function(id, successCallback, errorCallback) {
            blockUI.start();
			$http.get(config.BASE_URL + 'midia/' + id)
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

		this.delete = function(id, successCallback, errorCallback) {
            blockUI.start();
			$http.get(config.BASE_URL + 'midia/' + id + '/delete')
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