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
		modalCtrl.selectedVideo = {};

		activate();

		function activate(){
			//Using control parameter 
			fillSlider(jsonData);
		}

		function fillSlider(data){
			//Set selected video
			if(data.length > item.itemid){
				modalCtrl.selectedVideo = data[item.itemid];
			}else{
				console.log('The video selected is out of range');
			}
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
				case 'general':
					portafolio.type = 'video-general';
					portafolio.title = 'Video';
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
		        templateUrl: 'js/app/video/video-modal.html',
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