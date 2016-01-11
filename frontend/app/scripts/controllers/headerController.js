(function() {

	var modulo = angular.module('mercadaoModule');

	modulo.controller('headerController', function($scope, $rootScope, $location) {
		$scope.itemLocality = "Lavras";

		$scope.init = function() {
			$scope.geocoder = new google.maps.Geocoder();

			var codeLatLng = function(lat, lng) {

				var latlng = new google.maps.LatLng(lat, lng);

				$scope.geocoder.geocode({latLng: latlng}, function(results, status) {

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
			
			// Get the latitude and the longitude;
			var successFunction = function(position) {

				var lat = position.coords.latitude;
				var lng = position.coords.longitude;

				codeLatLng(lat, lng);

			};

			var errorFunction = function() {

				alert("Geocoder failed");

			};
			
			if (navigator.geolocation)
				navigator.geolocation.getCurrentPosition(successFunction, errorFunction);

		};

	});

})();