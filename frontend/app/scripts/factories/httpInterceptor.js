(function() {

	angular.module('appModule').factory('httpInterceptor', function($q, $window, config, $rootScope) {

		var HTTPStatus = {
			UNAUTHORIZED: '401',
			FORBIDDEN: '403',
			REDIRECT: '312'
		};

		return {

			'responseError': function(rejection) {
				
				if(rejection.status == HTTPStatus.REDIRECT) {

					location.href = rejection.headers("location");

					return rejection;
					
				} else if (rejection.status == HTTPStatus.UNAUTHORIZED) {

					$rootScope.removeUsuario();

					location.href = config.LOGIN_REDIRECT_URL;

					return rejection;

				}

				return $q.reject(rejection);

			}

		};

	});

})();
