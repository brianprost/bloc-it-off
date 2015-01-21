/**
 * You can put your site-wide javascript in this file.  Or just put it in another file and
 * include it in your layout.jade file. It's pretty easy either way.
 **/

// require("./firebase-bio.js")

var Firebase = require("firebase");
var bio-fb = new Firebase("https://bloc-it-off.firebaseio.com/");

bio-fb.set({ name: "Brian Prost" });