/*global require*/
'use strict';

// Main dependecy configuration for require js
require.config({

    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore'
            ],
            exports: 'Backbone'
        }
    },

    // absolute path to libs
    paths: {
        jquery: 'http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.0/jquery',
        backbone: 'http://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min',
        underscore: 'http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore-min'
    }
});

require([
    'backbone',
    'modules/router'
], function (Backbone, Router) {

    // register router
    var router = new Router();

    // start app browser history
    Backbone.history.start();

});
