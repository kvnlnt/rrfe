define([

    'backbone'

], function (Backbone) {
    'use strict';

    var model = Backbone.Model.extend({

    	defaults:{
    		hello:'hello from model'
    	},

    	initialize:function(){

        },

        number:function(){
            return 1;
        }


    });

    return model;
});
