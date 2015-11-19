(function() {

	angular.module("appModule")
		
		.filter('if', function() {
			return function(v, yes, no) {
				return v ? yes : no;
			};
		});
})();
