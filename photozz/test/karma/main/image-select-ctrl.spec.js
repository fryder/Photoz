'use strict';

describe('module: main, controller: ImageSelectCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var ImageSelectCtrl;
  beforeEach(inject(function ($controller) {
    ImageSelectCtrl = $controller('ImageSelectCtrl');
  }));

  it('should do something', function () {
    expect(!!ImageSelectCtrl).toBe(true);
  });

});
