define([
    'jquery',
    'backbone',
    'modules/view',
    'modules/model'
], function ($, Backbone, View, Model) {
    'use strict';

    var router = Backbone.Router.extend({
        
        routes: {
            ""     : "main",
            "page" : "page"
        },

        main:function(){

            var model = new Model();
            var view  = new View({model:model});

        },

        page:function(){

            var model = new Model({hello:"Hello, I'm a subpage"});
            var view  = new View({model:model});

        }

    });

    return router;
});