'use strict';

describe('Controller: RepositoriesCtrl', function () {

  // load the controller's module
  beforeEach(module('dockerhubSearchApp'));

  var RepositoriesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RepositoriesCtrl = $controller('RepositoriesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RepositoriesCtrl.awesomeThings.length).toBe(3);
  });
});
