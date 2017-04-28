( function() {
	'use strict';

	angular.module('chaiApp.trayect').controller('TrayectCtrl', TrayectCtrl);

	TrayectCtrl.$inject = ['$routeParams'];

	/**@ngInject*/
	function TrayectCtrl($routeParams){
		var homeCtrl = this;

		//Initialize controller
		activate();

		function activate(){
			console.log('Activated TrayectCtrl');	
		}
	}
})();