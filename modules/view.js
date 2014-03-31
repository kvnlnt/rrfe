/*global define*/

define([

    'backbone',

], function (Backbone) {
    'use strict';

    var view = Backbone.View.extend({

        initialize: function() {
            this.listenTo(this.model, "change", this.render);
            this.render();
        },

        render: function() {
            console.log(this.model.get('hello'));
        }

    });

    return view;

});