/*global require*/
'use strict';

require([

    'module/hello',
    'module/goodbye'

], function (hello, goodbye) {

    console.log(hello);
    console.log(goodbye);

});
