( function() {
	'use strict';

	angular.module('chaiApp.home').controller('HomeCtrl', HomeCtrl);

	HomeCtrl.$inject = ['$routeParams', '$window'];

	/**@ngInject*/
	function HomeCtrl($routeParams, $window){
		var homeCtrl = this;

		//Initialize controller
		activate();

		function activate(){
			console.log('Activated HomeCtrl');	
			$window.location.href = '.';
		}
	}
})();