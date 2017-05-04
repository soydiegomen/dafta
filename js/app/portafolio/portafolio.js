( function() {
	'use strict';

	angular.module('chaiApp.portafolio').controller('ModalCtrl', ModalCtrl);

	ModalCtrl.$inject = ['$scope', '$uibModalInstance','dataservice', 'item'];

	function ModalCtrl($scope, $uibModalInstance, dataservice, item){
		var modalCtrl = this;

		modalCtrl.selectItem = selectItem;
		modalCtrl.close = close;
		modalCtrl.slides = [];
		modalCtrl.active = 0;
		var currIndex = 0;

		activate();

		function activate(){
			dataservice.getPortfolio('aereas').then(fillSlider);
		}

		function selectItem(){
			console.selectItem();
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

	angular.module('chaiApp.portafolio').controller('PortafolioCtrl', PortafolioCtrl);

	PortafolioCtrl.$inject = ['$routeParams', '$uibModal', 'dataservice'];

	/**@ngInject*/
	function PortafolioCtrl($routeParams, $uibModal, dataservice){
		var portafolioCtrl = this;
		portafolioCtrl.showModal = showModal;

		//Atributos
		portafolioCtrl.key = null;
		portafolioCtrl.bigItem = null;
		portafolioCtrl.firstSection = [];
		portafolioCtrl.secondSection = [];
		portafolioCtrl.thirdSection = [];

		//Initialize controller
		activate();

		function activate(){
			portafolioCtrl.key = $routeParams.key;
			console.log('Activated PortafolioCtrl');	
			getPortafolio('aereas');
		}

		function getPortafolio(type){
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
		}

		function showModal(item){
			console.log('item', item);
			var modalInstance = $uibModal.open({
		        templateUrl: 'js/app/portafolio/portafolio-modal.html',
		        controller: 'ModalCtrl',
		        controllerAs: 'modalCtrl',
		        size: 'lg',
		        resolve: {
					item: function () {
						return item;
					}
				}
		    });
		}
	}


})();