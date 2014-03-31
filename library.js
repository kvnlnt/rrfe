/*global require*/
'use strict';

// Main dependecy configuration for require js
require.config({
    paths: {
        jquery: 'http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.0/jquery'
    }
});

require([

    'jquery',
    'modules/hello',
    'modules/goodbye'

], function ($, hello, goodbye) {

    console.log("I'm using jQuery", $.fn.jquery);
    console.log(hello);
    console.log(goodbye);

});
