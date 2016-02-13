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

	])

	.filter("customCurrency", function (numberFilter){
		function isNumeric(value){
			return (!isNaN(parseFloat(value)) && isFinite(value));
		}
		return function (inputNumber, currencySymbol, decimalSeparator, thousandsSeparator, decimalDigits) {
			if (isNumeric(inputNumber)){
		        // Default values for the optional arguments
		        currencySymbol = (typeof currencySymbol === "undefined") ? "R$ " : currencySymbol;
		        decimalSeparator = (typeof decimalSeparator === "undefined") ? "," : decimalSeparator;
		        thousandsSeparator = (typeof thousandsSeparator === "undefined") ? "." : thousandsSeparator;
		        decimalDigits = (typeof decimalDigits === "undefined" || !isNumeric(decimalDigits)) ? 2 : decimalDigits;
		
		        if (decimalDigits < 0) decimalDigits = 0;
		
		        // Format the input number through the number filter
		        // The resulting number will have "," as a thousands separator
		        // and "." as a decimal separator.
		        var formattedNumber = numberFilter(inputNumber, decimalDigits);
		
		        // Extract the integral and the decimal parts
		        var numberParts = formattedNumber.split(".");
		
		        // Replace the "," symbol in the integral part
		        // with the specified thousands separator.
		        numberParts[0] = numberParts[0].split(",").join(thousandsSeparator);
		
		        // Compose the final result
		        var result = currencySymbol + numberParts[0];
		
		        if (numberParts.length == 2){
		          result += decimalSeparator + numberParts[1];
		        }

		        return result;
			}else{
				return inputNumber;
			}
		};
	});

})(jQuery);