( function() {
	'use strict';

	angular.module('chaiApp.clases').controller('ClasesCtrl', ClasesCtrl);

	/**@ngInject*/
	function ClasesCtrl(){
		var homeCtrl = this;

		//Initialize controller
		activate();

		function activate(){
			console.log('Activated ClasesCtrl');	
		}
	}
})();