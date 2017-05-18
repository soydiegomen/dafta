( function() {
	'use strict';

	angular.module('chaiApp.trayect').controller('TrayectCtrl', TrayectCtrl);

	TrayectCtrl.$inject = ['analyticsservice'];

	/**@ngInject*/
	function TrayectCtrl(analyticsservice){
		var homeCtrl = this;

		//Initialize controller
		activate();

		function activate(){
			console.log('Activated TrayectCtrl');	
			//Tracking google analytics view
			analyticsservice.trackPageView();
		}
	}
})();