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
    
    $stateProvider.state('index', {
        controller: 'index',
        templateUrl: '/index'
    })
    
    $stateProvider.state('signup', {
        url: '/signup',
        controller: 'signup',
        templateUrl: '/signup'
    });
    
    $stateProvider.state('ending-soon', {
        url: '/ending-soon',
        controller: 'ending-soon',
        templateUrl: '/ending-soon'
    });
    
    $stateProvider.state('in-progress', {
        url: '/in-progress',
        controller: 'in-progress',
        templateUrl: '/in-progress'
    });
    
    $stateProvider.state('expired', {
        url: '/expired',
        controller: 'expired',
        templateUrl: '/expired'
    });
    
}]);

BlocItOff.controller("index", function($scope) {
    
})

BlocItOff.controller("signup", function($scope, $firebase) {
    var ref = new Firebase("https://bloc-it-off.firebaseio.com/");
    // ref.authWithOAuthPopup("facebook", function(error, authData) {
    //     if (error) {
    //         console.log("Login Failed!", error);
    //     } else {
    //         console.log("Authenticated successfully with payload:", authData);
    //     }
    // })
})

BlocItOff.controller("ending-soon", function($scope, $firebase) {
    var ref = new Firebase("https://bloc-it-off.firebaseio.com/");
})

BlocItOff.controller("in-progress", function($scope, $firebase) {
    var ref = new Firebase("https://bloc-it-off.firebaseio.com/");
})

BlocItOff.controller("expired", function($scope, $firebase) {
    var ref = new Firebase("https://bloc-it-off.firebaseio.com/");
})