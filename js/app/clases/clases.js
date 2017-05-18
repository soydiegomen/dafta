( function() {
	'use strict';

	angular.module('chaiApp.clases').controller('ClasesCtrl', ClasesCtrl);

	ClasesCtrl.$inject = ['analyticsservice'];

	/**@ngInject*/
	function ClasesCtrl(analyticsservice){
		var homeCtrl = this;

		//Attributes
		this.detailsEncuadre = false;
		this.detailsIluminacion = false;
		this.detailsTemario = false;

		//Initialize controller
		activate();

		function activate(){
			console.log('Activated ClasesCtrl');	
			//Tracking google analytics view
			analyticsservice.trackPageView();
		}
	}
})();