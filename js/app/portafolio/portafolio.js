( function() {
	'use strict';

	angular.module('chaiApp.portafolio').controller('ModalCtrl', ModalCtrl);

	ModalCtrl.$inject = ['$scope', '$uibModalInstance'];

	function ModalCtrl($scope, $uibModalInstance){
		var modalCtrl = this;
		modalCtrl.close = close;
		modalCtrl.slides = [];
		modalCtrl.myInterval = 5000;
		modalCtrl.noWrapSlides = false;
		modalCtrl.active = 0;
		var currIndex = 0;

		function close(){
			$uibModalInstance.close( true );
		}

		function addSlide() {
			var newWidth = 600 + modalCtrl.slides.length + 1;
			modalCtrl.slides.push({
			  image: '//unsplash.it/' + newWidth + '/300',
			  text: ['Nice image','Awesome photograph','That is so cool','I love that'][modalCtrl.slides.length % 4],
			  id: currIndex++
			});
		}

		for (var i = 0; i < 4; i++) {
		    addSlide();
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
			//$dialog.dialog({}).open('js/app/portafolio/modal-portafolio.html');  
		}

		function doClick(){
			var modalInstance = $uibModal.open({
		        templateUrl: 'js/app/portafolio/modal-portafolio.html',
		        controller: 'ModalCtrl',
		        controllerAs: 'modalCtrl',
		        size: 'lg'
		    });
		}
	}


})();