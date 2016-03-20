(function() {

	var modulo = angular.module('mercadaoModule');

	modulo.service('correiosServices', function($http, $rootScope, config, blockUI) {

		this.checkCEP = function(CEP , successCallback, errorCallBack) {
			if(CEP !== undefined){
				blockUI.start();
				$http.get('http://viacep.com.br/ws/'+CEP+'/json/')
					.success( function(data) {
						
						blockUI.stop();
						if(successCallback){
							successCallback.call(null,data);
						}
						
					})
					.error( function(error) {
						blockUI.stop();
						if(!errorCallBack)
							$rootScope.$broadcast('showMessageEvent', error, 'danger');
						else
							errorCallBack.call(null, error);
					});
			}
			
		};
	});

})();