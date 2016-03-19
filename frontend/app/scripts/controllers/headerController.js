(function() {

	var modulo = angular.module('mercadaoModule');

	modulo.controller('headerController', function($scope, $rootScope, $location, headerService, $log) {
		
		$scope.userLoginInfo = {
			username: null,
			password: null
		};

		$scope.itemLocality = "Lavras";
		$scope.geocoder = null;

		var codeLatLng = function(lat, lng) {

			var latlng = new google.maps.LatLng(lat, lng);

			$scope.geocoder.geocode({'latLng': latlng}, function(results, status) {

				if (status == google.maps.GeocoderStatus.OK) {

					if (results[1]) {

						var arrAddress = results;

						$.each(arrAddress, function(i, address_component) {

							if (address_component.types[0] == "locality") {

								$scope.itemLocality = address_component.address_components[0].long_name;
								$scope.$apply();

							}

						});

					} else {

						console.log("No results found");

					}

				} else {

					console.log("Geocoder failed due to: " + status);

				}

			});

		};


		$scope.init = function() {
			$scope.geocoder = new google.maps.Geocoder();
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

		$scope.login = function() {

			headerService.login($scope.userLoginInfo,

				function(response) {

					if(response.success) {

						$rootScope.auth.username = $scope.userLoginInfo.username;
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