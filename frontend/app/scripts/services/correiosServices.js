(function() {

	var modulo = angular.module('mercadaoModule');

	modulo.service('correiosServices', function($http, $rootScope, config) {

		this.checkCEP = function(CEP , successCallback, errorCallBack) {
			if(CEP !== undefined){
				$.blockUI();
				$http.get('http://viacep.com.br/ws/'+CEP+'/json/')
					.success( function(data) {
						
						$.unblockUI();
						if(successCallback){
							successCallback.call(null,data);
						}
						
					})
					.error( function(error) {
						$.unblockUI();
						if(!errorCallBack)
							$rootScope.$broadcast('showMessageEvent', error, 'danger');
						else
							errorCallBack.call(null, error);
					});
			}
			
		};
	});

})();