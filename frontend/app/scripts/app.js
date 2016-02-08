var exports = {};
var app = exports;

(function($) {

	var modulo = angular.module('mercadaoModule', ['ngRoute', 'ui.bootstrap']);

	modulo.config(['$routeProvider', '$httpProvider', '$compileProvider',

		function($routeProvider, $httpProvider, $compileProvider){

			// register the interceptor as a service, intercepts ALL angular ajax http calls
			$httpProvider.interceptors.push('httpInterceptor');

			$compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|data):/);

			$routeProvider
				.when('/cadastrarUsuario', {
					templateUrl: 'views/sections/cadastrarUsuario.html',
					controller: 'UsuarioController'
				})
				.when('/inicial', {
					templateUrl: 'views/sections/inicial.html',
					controller: 'InicialController'
				})
				.otherwise({
					redirectTo: '/',
					templateUrl: 'views/sections/inicial.html',
					controller: 'InicialController'
				});

		}

	])

	.controller('AppCtrl', ["$scope", "$rootScope",
		function($scope, $rootScope) {

			$.material.init();

			// Evento de mudanca de rota
			$scope.$on('$routeChangeSuccess', function(scope, next, current) {


			});

		}

	]);

})(jQuery);