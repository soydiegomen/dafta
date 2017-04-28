(function () {
	'use strict';
	angular.module('chaiApp.trayect').run(appRun);

	function appRun(routehelper){
		routehelper.configureRoutes(getRoutes());
	}
	function getRoutes() {
		return [
			{
				url: '/trayectoria',
				config: {
					templateUrl: 'js/app/trayectoria/trayectoria.html',
			        controller: 'TrayectCtrl',
			        controllerAs: 'trayectCtrl'
				}
			}
		];
	}

})();