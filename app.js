/**
 * This is the lightweight app.js file that runs your new express-powered Ghiraldi app.
 * Run this to run your entire application.
 * 
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
 * 
 * Copyright (C) 2012, John O'Connor
 **/
 
/**
 * Module dependencies.
 */
// see http://jquerymobile.com/themeroller/?ver=1.3.2&style_id=20130917-99 for colors
 
var express = require('express'),
    path = require('path'),
    app = express();

// app.get('/*',function(req,res,next){
//     res.header('Access-Control-Allow-Origin', '*');
//     next();
// });

// app.post('/*',function(req,res,next){
//     res.header('Access-Control-Allow-Origin', '*');
//     next();
// });


// Boot the MVC framework and start listening if the boot completes successfully.
require('./mvc').boot(app, function(bootParams) {
        // var port = 8888;
    if (bootParams.status === true) {
        // app.get('/*', function(req, res, next) {
        //     res.header('Access-Control-Allow-Origin', '*');
        // })
        // app.post('/*', function(req, res, next) {
        //     res.header('Access-Control-Allow-Origin', '*');
        // });
        app.listen(bootParams.port);
        console.log('ghiraldi app started on port ' + bootParams.port);
    } else {
        console.log("ghiraldi app failed to start: " + bootParams.errors);
    }
});

var Firebase = require("firebase");
var myFirebaseRef = new Firebase("https://bloc-it-off.firebaseio.com/");
