// Define a testing module and load it's dependencieds
define(['module/model.test'], function(Model) {
  'use strict';

  // Describe the main testing block
  describe('Model', function() {

  	// unit tests
    it('should return a number', function() {
      var model = new Model();
      var number = typeof model.number();
		  expect(number).toBe("number");
    });

    it('should return a number 2', function() {
      var model = new Model();
      var number = typeof model.number();
      expect(number).toBe("number");
    });

  });

});