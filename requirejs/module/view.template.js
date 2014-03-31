/*global define*/

define([

    'underscore',
    'backbone',
    'text!templates/hello.html',

], function (_, Backbone, Template) {
    'use strict';

    var view = Backbone.View.extend({

        el:'#content',

        initialize: function() {
            this.listenTo(this.model, "change", this.render);
            this.render();
        },

        render: function() {

            // load and compile template
            var template = _.template(Template, { message: this.model.get('hello') });

            // attach result to DOM
            this.$el.append(template);

        }

    });

    return view;

});