define([

    'backbone'

], function (Backbone) {
    'use strict';

    var model = Backbone.Model.extend({

    	defaults:{
    		hello:'hello from model'
    	},

    	initialize:function(){

    		var that = this'

    		var changed = function(){ 
    			that.set({hello:'hello from changed model'}); 
    		};

    		setTimeout(changed, 2000);

    	}


    });

    return model;
});
