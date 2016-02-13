(function() {

	var modulo = angular.module('mercadaoModule');

	modulo.controller('InicialController', function($scope, $rootScope, $location) {
		//console.log('teste de console - InicialController');
		$scope.procutFilter = {
			name:null
		};

		$scope.productList = [{
			id: 12838,
			imagem : 'http://charges.uol.com.br/upload/bobagens/aguad.jpg',
			nome: 'Água Desidratada',
			preco: 180.2,
			venda: true
		},{
			id: 12838,
			imagem : 'http://g04.s.alicdn.com/kf/HTB1zn1BFVXXXXbgXVXXq6xXFXXXl/200116570/HTB1zn1BFVXXXXbgXVXXq6xXFXXXl.jpg',
			nome: 'Urso de pelúcia',
			preco: 52.0,
			venda: true
		},{
			id: 12838,
			imagem : 'http://es.i.uol.com.br/moda/album/guiacomprascalorelegante_f_008.jpg',
			nome: 'Mochila Rebelde',
			preco: 45.0,
			venda: true
		},{
			id: 12838,
			imagem : 'http://s2.glbimg.com/TTNIKBZ2gcOS5Rmq6UuYGw8oy8o=/620x465/s.glbimg.com/jo/g1/f/original/2014/01/30/dinheiropf1.jpg',
			nome: 'Forno Elétrico',
			preco: 230.0,
			venda: true
		},{
			id: 12838,
			imagem : 'http://charges.uol.com.br/upload/bobagens/aguad.jpg',
			nome: 'Água Desidratada',
			preco: 180.2,
			venda: true
		},{
			id: 12838,
			imagem : 'http://g04.s.alicdn.com/kf/HTB1zn1BFVXXXXbgXVXXq6xXFXXXl/200116570/HTB1zn1BFVXXXXbgXVXXq6xXFXXXl.jpg',
			nome: 'Urso de pelúcia',
			preco: 52.0,
			venda: true
		},{
			id: 12838,
			imagem : 'http://es.i.uol.com.br/moda/album/guiacomprascalorelegante_f_008.jpg',
			nome: 'Mochila Rebelde',
			preco: 45.0,
			venda: true
		},{
			id: 12838,
			imagem : 'http://s2.glbimg.com/TTNIKBZ2gcOS5Rmq6UuYGw8oy8o=/620x465/s.glbimg.com/jo/g1/f/original/2014/01/30/dinheiropf1.jpg',
			nome: 'Forno Elétrico',
			preco: 230.0,
			venda: true
		}];
	});

})();