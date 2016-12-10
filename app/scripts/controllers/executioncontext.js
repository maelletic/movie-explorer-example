'use strict';

/**
 * @ngdoc function
 * @name movieExplorerApp.controller:ExecutioncontextCtrl
 * @description
 * # ExecutioncontextCtrl
 * Controller of the movieExplorerApp
 */
angular.module('movieExplorerApp')
  .controller('ExecutionContextCtrl', function () {
    var ctrl = this;
	
	ctrl.sideMenuIsVisible = false;
	
	ctrl.openSideMenu = function()
	{
		ctrl.sideMenuIsVisible = true;
	};
	
	ctrl.closeSideMenu = function()
	{
		ctrl.sideMenuIsVisible = false;
	};
	
  });
