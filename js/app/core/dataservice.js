(function () {
	'use strict';

	
	angular.module('chaiApp.core').factory('dataservice', dataservice);

	dataservice.$inject = ['$http','appConfig'];

	function dataservice($http, appConfig){
		var service = {
			getPortfolio : getPortfolio
		};

		return service;

		function getPortfolio(type){
			var serviceUrl = getPortfolioService(type);
			console.log(type);
			console.log(serviceUrl);
			return $http.get(serviceUrl).then(getDesignGallComplete).catch(function (message){
				console.log('Error in getDesignGallery. Message:' + message);
			});

			function getDesignGallComplete(data, status, headers, config){
				console.log('service data', data);
				return data.data;
			}
		}

		/*Helpers*/
		function getPortfolioService(type){
			var serviceUrl = '';
			switch(type){
				case 'aereas':
					serviceUrl = 'jsons/portafolio-aereas.json';
					break;
				case 'corporativa':
					serviceUrl = 'jsons/portafolio-corporativa.json';
					break;
				case 'retrato':
					serviceUrl = 'jsons/portafolio-retrato.json';
				break;
				case 'product-shot':
					serviceUrl = 'jsons/portafolio-producto.json';
				break;
				case 'interiorismo':
					serviceUrl = 'jsons/portafolio-interiorismo.json';
				break;
				case 'caricia-luz':
					serviceUrl = 'jsons/series-caricia.json';
				break;
				case 'cultura':
					serviceUrl = 'jsons/series-cultura.json';
				break;
				case 'diseno':
					serviceUrl = 'jsons/portafolio-diseno.json';
				break;
			}
			return serviceUrl;
		}
	}
})();