( function() {
	'use strict';

	angular.module('chaiApp.series').controller('SeriesCtrl', SeriesCtrl);

	SeriesCtrl.$inject = ['analyticsservice'];

	/**@ngInject*/
	function SeriesCtrl(analyticsservice){
		var homeCtrl = this;

		//Initialize controller
		activate();

		function activate(){
			console.log('Activated SeriesCtrl');	
			//Tracking google analytics view
			analyticsservice.trackPageView();
		}
	}
})();