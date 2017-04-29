(function () {
	'use strict';
	angular.module('chaiApp.portafolio').run(appRun);

	function appRun(routehelper){
		routehelper.configureRoutes(getRoutes());
	}
	function getRoutes() {
		return [
			{
				url: '/portafolio/:key?',
				config: {
					templateUrl: 'js/app/portafolio/portafolio.html',
			        controller: 'PortafolioCtrl',
			        controllerAs: 'portafolioCtrl'
				}
			}
		];
	}

})();