(function() {

	var modulo = angular.module('mercadaoModule');

	modulo.controller('headerController', function($scope, $http, $rootScope, $location, headerService, $log) {
		
		$scope.userLoginInfo = {
			username: null,
			password: null
		};

		$scope.itemLocality = "Lavras";
		$scope.geocoder = null;
		$rootScope.auth.username = '';

		var codeLatLng = function(lat, lng) {
			
			$http.get('http://nominatim.openstreetmap.org/reverse?format=json&lat='+lat+'&lon='+lng+'&zoom=18&addressdetails=1')
			.then( function (result) {
				$scope.itemLocality = result.data.address.city;
				$rootScope.itemLocalityId = result.data.place_id;
				//$scope.$apply();
				
			})
			.catch( function(error) {
				let errorMessage = "não foi possível identificar sua cidade/região. Por favor autorize a geolicalização de seu navegador";
				$scope.$emit('showMessageEvent',errorMessage , 'danger');
			});

		};


		$scope.init = function() {

			// Get the latitude and the longitude;
			var successFunction = function(position) {

				var lat = position.coords.latitude;
				var lng = position.coords.longitude;

				codeLatLng(lat, lng);

			};

			var errorFunction = function(err) {

				if(err.code == 1) {
				   console.log("Error: Access to location is denied!");
				}
				
				else if( err.code == 2) {
				   console.log("Error: Position is unavailable!");
				}

			};
			
			if (navigator.geolocation)
				navigator.geolocation.getCurrentPosition(successFunction, errorFunction,{timeout:1000});
		};

		$scope.init();

		$scope.login = function() {

			var copiaUsuario = {};
			angular.copy($scope.userLoginInfo, copiaUsuario);
			copiaUsuario.password = CryptoJS.MD5($scope.userLoginInfo.password).toString();

			headerService.login(copiaUsuario,

				function(response) {

					if(response.success) {

						$rootScope.auth.username = $scope.userLoginInfo.username;

						$scope.userLoginInfo = {
							username: null,
							password: null
						};

						$('#modalLogin').modal('hide');
						
						$location.path('/dashboard');

					} else {

						$scope.$emit('showMessageEvent', response.message, 'danger');

					}

				}

			);

		};

		$scope.estaNaDashboard = function() {

			if($location.path() == '/dashboard') {
				return true;
			} else {
				return false;
			}

		};

		$scope.logout = function() {

			headerService.logout(

				function(response) {

					if(response.success) {

						$rootScope.auth.username = '';
						$location.path('/inicial');

					} else {

						$scope.$emit('showMessageEvent', response.message, 'danger');

					}

				}

			);


		};

		$scope.isAuthenticated = function() {

			if($rootScope.auth.username) {

				$log.debug($rootScope.auth.username);
				$location.path('/dashboard');

			} else {

				headerService.isAuthenticated(
					function(response) {
						if(response.success) {

							$rootScope.auth.username = response.message;
							$location.path('/dashboard');

						} else {

							$location.path('/inicial');

						}

					}

				);

			}

		};

		$scope.isAuthenticated();

	});

})();