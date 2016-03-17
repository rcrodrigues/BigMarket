(function() {

	var modulo = angular.module('mercadaoModule');

	modulo.service('headerService', function($http, $rootScope, config) {

		this.login = function(loginInfo, successCallback, errorCallback) {

			$http.post(config.BASE_URL + 'login', loginInfo)
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