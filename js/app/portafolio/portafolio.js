( function() {
	'use strict';

	angular.module('chaiApp.portafolio').controller('ModalCtrl', ModalCtrl);

	ModalCtrl.$inject = ['$scope', '$uibModalInstance','dataservice'];

	function ModalCtrl($scope, $uibModalInstance, dataservice){
		var modalCtrl = this;
		modalCtrl.close = close;
		modalCtrl.slides = [];
		modalCtrl.myInterval = 5000;
		modalCtrl.noWrapSlides = false;
		modalCtrl.active = 0;
		var currIndex = 0;

		activate();

		function activate(){
			dataservice.getPortfolio('aereas').then(fillSlider);
		}

		function fillSlider(data){
			//index property must start with 0
			modalCtrl.slides = data;
			console.log('slides', data);
			/*for (var i = 0; i < 4; i++) {
			    addSlide();
			}
			console.log('slides2', modalCtrl.slides);*/
		}

		function close(){
			$uibModalInstance.close( true );
		}

		
		function addSlide() {
			var newWidth = 600 + modalCtrl.slides.length + 1;
			modalCtrl.slides.push({
			  imageUrl: 'img/portafolio/inter/inter-01.jpg', 
			  itemid: currIndex++
			});
		}

		
	}

	angular.module('chaiApp.portafolio').controller('PortafolioCtrl', PortafolioCtrl);

	PortafolioCtrl.$inject = ['$routeParams', '$uibModal'];

	/**@ngInject*/
	function PortafolioCtrl($routeParams, $uibModal){
		var portafolioCtrl = this;
		portafolioCtrl.click = doClick;

		portafolioCtrl.key = 'uno';
		console.log('PortafolioCtrl', $uibModal);

		//Initialize controller
		activate();

		function activate(){
			portafolioCtrl.key = $routeParams.key;
			console.log('Activated PortafolioCtrl');	
		}

		function doClick(){
			var modalInstance = $uibModal.open({
		        templateUrl: 'js/app/portafolio/portafolio-modal.html',
		        controller: 'ModalCtrl',
		        controllerAs: 'modalCtrl',
		        size: 'lg'
		    });
		}
	}


})();