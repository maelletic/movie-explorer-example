'use strict';

describe('Controller: ExecutioncontextCtrl', function () {

  // load the controller's module
  beforeEach(module('movieExplorerApp'));

  var ExecutioncontextCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExecutioncontextCtrl = $controller('ExecutioncontextCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));
});
