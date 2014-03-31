/*global define*/

define([

    'backbone',
    'module/view'

], function (Backbone, parentView) {
    'use strict';

    var childView = parentView.extend({
	   render: function(){
	      console.log("I'm a child view,", this.model.get('hello'));
	   }
	});

    return childView;



});