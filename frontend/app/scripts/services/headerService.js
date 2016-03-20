(function() {

	var modulo = angular.module('mercadaoModule');

	modulo.service('headerService', function($http, $rootScope, config, blockUI) {

		this.login = function(loginInfo, successCallback, errorCallback) {
            blockUI.start();
			$http.post(config.BASE_URL + 'login', loginInfo)
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

		this.isAuthenticated = function(successCallback, errorCallback) {
            blockUI.start();
			$http.get(config.BASE_URL + 'isAuthenticated')
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

		this.logout = function(successCallback, errorCallback) {
            blockUI.start();
			$http.get(config.BASE_URL + 'logout')
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