/**
 * You can put your site-wide javascript in this file.  Or just put it in another file and
 * include it in your layout.jade file. It's pretty easy either way.
 **/

var app = angular.module("BlocItOff", [
    'firebase',
    'ui-router'
    ]);

app.controller("FRBcontroller", function($scope, $firebase) {
    var ref = new Firebase("https://bloc-it-off.firebaseio.com/");
    var sync = $firebase(ref);
    ref.set({name: 'Brian Prost'});
})

