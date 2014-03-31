/*global require*/
'use strict';

// Main dependecy configuration for require js
require.config({

    paths: {
        jquery: 'http://code.jquery.com/jquery-2.1.0.min',
        backbone: 'http://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min',
        underscore: 'http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore-min'
    },

    // register non-modules, dependencies, etc..
    shim: {
        backbone: {
            deps: [
                'underscore'
            ]
        }
    },

});

require([

    'backbone',
    'modules/hello',
    'modules/goodbye',
    'modules/jquery_old'

], function (backbone, hello, goodbye) {

    console.log("I'm using jQuery", $.fn.jquery);
    console.log("I'm also using jQuery", jQuery_old.fn.jquery);
    console.log("I'm using underscore", _.VERSION);
    console.log("I'm using backbone", backbone.VERSION);
    console.log(hello);
    console.log(goodbye);

});
