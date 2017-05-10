(function() {
	'use strict';
	/* The name of the directives must star with lower case*/
	angular.module('chaiApp.widgets').directive('siteMenu', siteMenu);

	siteMenu.$inject = ['$rootScope'];

	function siteMenu($rootScope) {
		var directive = {
			restrict: 'EA',
		    templateUrl: 'js/app/widgets/siteMenu/site-menu.html',
		    link: function(scope, elem, attrs) {
		    	scope.isNavCollapsed = true;
		        /*
		        scope.isRouteLoading = false;

		        $rootScope.$on('$routeChangeStart', function() {
		          scope.isRouteLoading = true;
		        });

		        $rootScope.$on('$routeChangeSuccess', function() {
		          scope.isRouteLoading = false;
		        });*/
		    }
		};

		return directive;
	}

})();