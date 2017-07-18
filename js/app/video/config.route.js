(function () {
	'use strict';
	angular.module('chaiApp.video').run(appRun);

	function appRun(routehelper){
		routehelper.configureRoutes(getRoutes());
	}
	function getRoutes() {
		return [
			{
				url: '/video/:key?',
				config: {
					templateUrl: 'js/app/video/video.html',
			        controller: 'VideoCtrl',
			        controllerAs: 'videoCtrl'
				}
			}
		];
	}

})();