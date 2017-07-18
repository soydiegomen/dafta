( function() {
	'use strict';

	/*
	*Modal controller
	*/
	angular.module('chaiApp.video').controller('VideoModalCtrl', VideoModalCtrl);

	VideoModalCtrl.$inject = ['$scope', '$uibModalInstance','dataservice', 'item', 'jsonData'];

	function VideoModalCtrl($scope, $uibModalInstance, dataservice, item, jsonData){
		var modalCtrl = this;

		//methods
		modalCtrl.close = close;

		//Attributes
		modalCtrl.slides = [];
		modalCtrl.active = 0;

		activate();

		function activate(){
			//Using control parameter 
			fillSlider(jsonData);
		}

		function fillSlider(data){
			//index property must start with 0
			modalCtrl.slides = data;
			//Select slide of item selected
			modalCtrl.active = item.itemid;
		}

		function close(){
			$uibModalInstance.close( true );
		}
	}

	/*
	*Portafolio controller
	*/

	angular.module('chaiApp.video').controller('VideoCtrl', VideoCtrl);

	VideoCtrl.$inject = ['$routeParams', '$uibModal', 'dataservice', 'analyticsservice'];

	/**@ngInject*/
	function VideoCtrl($routeParams, $uibModal, dataservice, analyticsservice){
		var portafolioCtrl = this;
		//Methods
		portafolioCtrl.showModal = showModal;

		//Atributos
		portafolioCtrl.key = null;
		portafolioCtrl.bigItem = null;
		portafolioCtrl.firstSection = [];
		portafolioCtrl.secondSection = [];
		portafolioCtrl.thirdSection = [];
		portafolioCtrl.jsonData = [];

		//Initialize controller
		activate();

		function activate(){
			console.log('Activated PortafolioCtrl');	
			var generalData = getGeneralData($routeParams.key);
			portafolioCtrl.key = generalData.title;
			//Call service
			setupPortafolio(generalData.type);
			//Tracking google analytics view
			analyticsservice.trackPageView();
		}

		function getGeneralData(key){
			var portafolio = {};
			switch(key){
				case 'aereas':
					portafolio.type = 'aereas';
					portafolio.title = 'aéreas';
				break;
				case 'corporativa':
					portafolio.type = 'corporativa';
					portafolio.title = 'imagen corporativa';
				break;
				case 'retrato':
					portafolio.type = 'retrato';
					portafolio.title = 'retrato';
				break;
				case 'product-shot':
					portafolio.type = 'product-shot';
					portafolio.title = 'product shot';
				break;
				case 'interiorismo':
					portafolio.type = 'interiorismo';
					portafolio.title = 'interiorismo';
				break;
				case 'caricia-luz':
					portafolio.type = 'caricia-luz';
					portafolio.title = 'caricia de luz';
				break;
				case 'cultura':
					portafolio.type = 'cultura';
					portafolio.title = 'cultura';
				break;
				case 'diseno':
					portafolio.type = 'diseno';
					portafolio.title = 'Diseño';
				break;
			}

			return portafolio;
		}

		function setupPortafolio(type){
			dataservice.getPortfolio(type).then(setupImageList);
		}

		function setupImageList(data){
			//index property must start with 0
			var items = data;
			var normalCount = 0;
			items.forEach(function (item){
				if(item.type === 'big'){
					portafolioCtrl.bigItem = item;
				}else{

					if(normalCount <= 2){
						portafolioCtrl.firstSection.push(item);	
					}else if(normalCount <= 4){
						portafolioCtrl.secondSection.push(item);	
					}else{
						portafolioCtrl.thirdSection.push(item);	
					}

					normalCount++;
				}

			});

			portafolioCtrl.jsonData = data;
		}

		function showModal(item){
			var modalInstance = $uibModal.open({
		        templateUrl: 'js/app/portafolio/portafolio-modal.html',
		        controller: 'VideoModalCtrl',
		        controllerAs: 'modalCtrl',
		        size: 'lg',
		        resolve: {
		        	//selected item
					item: function () {
						return item;
					},
					//list of images for carousel
					jsonData: function () {
						return portafolioCtrl.jsonData;
					}
				}
		    });
		}
	}


})();