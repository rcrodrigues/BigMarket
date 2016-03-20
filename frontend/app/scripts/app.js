var exports = {};
var app = exports;

(function($) {

	var modulo = angular.module('mercadaoModule', ['ngRoute', 'ui.bootstrap', 'wu.masonry', 'imageupload']);

	modulo.config(['$routeProvider', '$httpProvider', '$compileProvider',

		function($routeProvider, $httpProvider, $compileProvider){

			// register the interceptor as a service, intercepts ALL angular ajax http calls
			$httpProvider.interceptors.push('httpInterceptor');

			$compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|data):/);

			$routeProvider
				.when('/visualizarProduto', {
					templateUrl: 'views/sections/visualizarProduto.html',
					controller: 'VisualizarProdutoController'
				})
                .when('/visualizarProduto/:produtoId', {
					templateUrl: 'views/sections/visualizarProduto.html',
					controller: 'VisualizarProdutoController'
				})
				.when('/cadastrarEditarProduto', {
					templateUrl: 'views/sections/cadastrarEditarProduto.html',
					controller: 'CadastrarEditarProdutoController'
				})
                .when('/cadastrarEditarProduto/:produtoId', {
					templateUrl: 'views/sections/cadastrarEditarProduto.html',
					controller: 'CadastrarEditarProdutoController'
				})
				.when('/dashboard', {
					templateUrl: 'views/sections/dashboard.html',
					controller: 'DashboardController'
				})
				.when('/cadastrarUsuario', {
					templateUrl: 'views/sections/cadastrarUsuario.html',
					controller: 'CadastrarUsuarioController'
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
			$rootScope.auth = {};
			$rootScope.auth.isLoggedIn = false;
			$rootScope.auth.username = '';

			$rootScope.isLoggedIn = function() {
				if($rootScope.auth.username === '') {
					return false;
				} else {
					return true;
				}
			};

			$scope.msg = {
				show: false,
				target: 'all'
			};
		
			function showMessage(texto, tipo, hideOnRouteChange, target) {

				$scope.msg = {
					texto: texto,
					tipo: tipo,
					show: true,
					hideOnRouteChange: hideOnRouteChange !== undefined ? hideOnRouteChange : true,
					target: target !== undefined ? target : 'all' // 'body' or 'modal' or 'all'
				};
								
			}

			function hideMessage() {

				$scope.msg.show = false;

			}


			// Evento de mudanca de rota
			$scope.$on('$routeChangeSuccess', function(scope, next, current) {

				if (!$scope.msg)
					return;

				if (!$scope.msg.hideOnRouteChange)
					$scope.msg.hideOnRouteChange = true;
				else
					hideMessage();


			});

			// Evento de exibição de mensagem
			$scope.$on('showMessageEvent', function(event, texto, tipo, hideOnRouteChange, target) {
				showMessage(texto, tipo, hideOnRouteChange, target);
			});

			// Evento para remover mensagem
			$scope.$on('hideMessageEvent', function(event) {
				hideMessage();
			});

		}

	]);

})(jQuery);