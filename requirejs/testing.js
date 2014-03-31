(function() {
  'use strict';

  // Configure RequireJS to shim Jasmine
  require.config({
    paths: {
      'jasmine': 'http://cdnjs.cloudflare.com/ajax/libs/jasmine/2.0.0/jasmine',
      'jasmine-html': 'http://cdnjs.cloudflare.com/ajax/libs/jasmine/2.0.0/jasmine-html',
      'boot': 'http://cdnjs.cloudflare.com/ajax/libs/jasmine/2.0.0/boot',
      'jquery': 'http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.0/jquery',
      'backbone': 'http://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min',
      'underscore': 'http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore-min'
    },
    shim: {
      'jasmine': {
        exports: 'jasmine'
      },
      'jasmine-html': {
        deps: ['jasmine'],
        exports: 'jasmine'
      },
      'boot': {
        deps: ['jasmine', 'jasmine-html'],
        exports: 'jasmine'
      },
      'underscore': {
            exports: '_'
      },
      'backbone': {
          deps: [
              'underscore',
              'jquery'
          ],
          exports: 'Backbone'
      }
    }
  });

  // Define all of your specs here. These are RequireJS modules.
  var specs = [
    'module/model.test.spec'
  ];

  // Load Jasmine - This will still create all of the normal Jasmine browser globals unless `boot.js` is re-written to use the
  // AMD or UMD specs. `boot.js` will do a bunch of configuration and attach it's initializers to `window.onload()`. Because
  // we are using RequireJS `window.onload()` has already been triggered so we have to manually call it again. This will
  // initialize the HTML Reporter and execute the environment.
  require(['boot'], function (jasmine) {

    // Load the specs
    require(specs, function () {

      // Initialize the HTML Reporter and execute the environment (setup by `boot.js`)
      window.onload();

    }); // require

  }); // require

})(); // closure
