(function() {

	var modulo = angular.module('mercadaoModule');

	modulo.service('midiasService', function($http, $rootScope, config) {

		this.getAll = function(successCallback, errorCallback) {

			$http.get(config.BASE_URL + 'midias')
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

		this.find = function(id, successCallback, errorCallback) {

			$http.get(config.BASE_URL + 'midia/' + id)
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