/**
 * You can put your site-wide javascript in this file.  Or just put it in another file and
 * include it in your layout.jade file. It's pretty easy either way.
 **/

var BlocItOff = angular.module("BlocItOff", [
    'firebase',
    'ui.router'
]);

BlocItOff.controller("FRBcontroller", function($scope, $firebase) {
    var ref = new Firebase("https://bloc-it-off.firebaseio.com/");
    var sync = $firebase(ref);
    ref.set({name: 'Brian Prost'});
    console.log('firebase');
})

BlocItOff.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    
    $stateProvider.state('signup', {
        url: '/signup',
        controller: 'signup',
        templateUrl: '/signup'
    });
    
}]);

BlocItOff.controller("signup", function($scope, $firebase) {
    var ref = new Firebase("https://bloc-it-off.firebaseio.com/");
    var sync = $firebase(ref);
    ref.set({name: 'Brian Prost'});
    console.log('firebase');
})