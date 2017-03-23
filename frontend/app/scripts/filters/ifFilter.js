(function() {

	angular.module("mercadaoModule")
		
		.filter('if', function() {
			return function(v, yes, no) {
				return v ? yes : no;
			};
		});
})();
