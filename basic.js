/*global require*/
'use strict';

require([

    'modules/hello',
    'modules/goodbye'

], function (hello, goodbye) {

    console.log(hello);
    console.log(goodbye);

});
