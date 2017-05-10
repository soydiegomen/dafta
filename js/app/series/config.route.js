(function () {
	'use strict';
	angular.module('chaiApp.series').run(appRun);

	function appRun(routehelper){
		routehelper.configureRoutes(getRoutes());
	}
	function getRoutes() {
		return [
			{
				url: '/series',
				config: {
					templateUrl: 'js/app/series/series.html',
			        controller: 'SeriesCtrl',
			        controllerAs: 'seriesCtrl'
				}
			}
		];
	}

})();