/**
 * You can put your site-wide javascript in this file.  Or just put it in another file and
 * include it in your layout.jade file. It's pretty easy either way.
 **/
 
var Firebase = require('firebase');
var bioFRB = new Firebase("https://bloc-it-off.firebaseio.com/");
bioFRB.set({name: "Brian Prost"})

bioFRB.on("value", function(data) {
  var name = data.val() ? data.val().name : "";
  alert("My name is " + name);
});