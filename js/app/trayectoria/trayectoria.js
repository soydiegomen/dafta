( function() {
	'use strict';

	angular.module('chaiApp.trayect').controller('TrayectCtrl', TrayectCtrl);

	/**@ngInject*/
	function TrayectCtrl(){
		var homeCtrl = this;

		//Initialize controller
		activate();

		function activate(){
			console.log('Activated TrayectCtrl');	
		}
	}
})();