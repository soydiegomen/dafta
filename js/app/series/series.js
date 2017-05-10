( function() {
	'use strict';

	angular.module('chaiApp.series').controller('SeriesCtrl', SeriesCtrl);

	/**@ngInject*/
	function SeriesCtrl(){
		var homeCtrl = this;

		//Initialize controller
		activate();

		function activate(){
			console.log('Activated SeriesCtrl');	
		}
	}
})();