/*global require*/
'use strict';

// Main dependecy configuration for require js
require.config({

    // shim registers libs as modules (wrapping them in a "define")
    // loads them in dependency order
    // makes them available to all require modules by their key, 
    shim: {
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ]
        }
    },

    paths: {
        jquery: 'http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.0/jquery',
        backbone: 'http://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min',
        underscore: 'http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore-min'
    }

});

require([

    'backbone',
    'modules/hello',
    'modules/goodbye'

], function (backbone, hello, goodbye) {

    console.log("I'm using jQuery", $.fn.jquery);
    console.log("I'm using underscore", _.VERSION);
    console.log("I'm using backbone", backbone.VERSION);
    console.log(hello);
    console.log(goodbye);

});
