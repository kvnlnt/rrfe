/*global define*/

define([

    'backbone',

], function (Backbone) {
    'use strict';

    var view = Backbone.View.extend({

        el:'#pubsub',

        initialize: function() {
             // subs
            Backbone.pubSub.on('link:clicked', this.render, this);
        },

        events: {
            'click': function(){ Backbone.pubSub.trigger("link:clicked") }
        },

        render: function() {
            console.log("I listen good");
        }

    });

    return view;

});