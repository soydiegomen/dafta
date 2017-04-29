(function () {
	'use strict';
	angular.module('chaiApp.clases').run(appRun);

	function appRun(routehelper){
		routehelper.configureRoutes(getRoutes());
	}
	function getRoutes() {
		return [
			{
				url: '/clases',
				config: {
					templateUrl: 'js/app/clases/clases.html',
			        controller: 'ClasesCtrl',
			        controllerAs: 'clasesCtrl'
				}
			}
		];
	}

})();