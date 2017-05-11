( function() {
	'use strict';

	angular.module('chaiApp.clases').controller('ClasesCtrl', ClasesCtrl);

	/**@ngInject*/
	function ClasesCtrl(){
		var homeCtrl = this;

		//Attributes
		this.detailsEncuadre = false;
		this.detailsIluminacion = false;
		this.detailsTemario = false;

		//Initialize controller
		activate();

		function activate(){
			console.log('Activated ClasesCtrl');	
		}
	}
})();