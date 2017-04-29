( function() {
	'use strict';

	angular.module('chaiApp.portafolio').controller('PortafolioCtrl', PortafolioCtrl);

	HomeCtrl.$inject = ['$routeParams', 'dataservice'];

	/**@ngInject*/
	function PortafolioCtrl($routeParams, dataservice){
		var portafolioCtrl = this;

		portafolioCtrl.key = 'uno';

		//Initialize controller
		activate();

		function activate(){
			portafolioCtrl.key = $routeParams.key;
			console.log('Activated PortafolioCtrl');	
		}
	}
})();