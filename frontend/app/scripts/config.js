(function() {

	var modulo = angular.module('appModule');

	modulo.value('config', {

		BASE_URL: '/',
		LOGIN_REDIRECT_URL: '/login',
		LOGIN_FAKE: true,
		URL_SICAR: 'http://localhost:9000/'
		
	});

})();