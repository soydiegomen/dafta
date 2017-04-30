( function() {
	'use strict';

	angular.module('chaiApp.portafolio').controller('ModalCtrl', ModalCtrl);

	ModalCtrl.$inject = ['$scope', '$uibModalInstance'];

	function ModalCtrl($scope, $uibModalInstance){
		$scope.agree = function () {
	      //send the status as true
	      $uibModalInstance.close( true );
	    };

	    $scope.disagree = function () {
	      //send the status as false
	      $uibModalInstance.close( false );
	    };
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
		        //to set this true, you will need to add ngAnimate module
		        animation: true,
		        // templateUrl: 'myModalContent.html',
		        templateUrl: 'js/app/portafolio/modal-portafolio.html',
		        controller: 'ModalCtrl',
		        size: 'md'
		    });
		}
	}


})();