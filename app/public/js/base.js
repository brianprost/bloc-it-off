/**
 * You can put your site-wide javascript in this file.  Or just put it in another file and
 * include it in your layout.jade file. It's pretty easy either way.
 **/

var BlocItOff = angular.module("BlocItOff", [
    'firebase',
    'ui.router'
]);

BlocItOff.constant("FIREBASE_URL", "https://bloc-me-off.firebaseio.com/")

BlocItOff.controller("tasks", function($scope, $firebase, FIREBASE_URL) {
    var FRBlist = new Firebase(FIREBASE_URL);
    $scope.todos = $firebase(FRBlist);
    
    $scope.addItem = function() {
        var timestamp = new Date().valueOf();
        
        var itemRef = new Firebase(FIREBASE_URL + timestamp);
        
        $firebase(itemRef).$set({
            id: timestamp,
            name: $scope.todoName,
            completed: false
        });
        
        $scope.todoName = "";
    };
    
    $scope.removeItem = function(index, item, event) {
        if (item.id == undefined)return;
        
        $scope.todos.$remove(item.id);
    };
    
    $scope.changeStatus = function(item){
        var itemRef = new Firebase(FIREBASE_URL + item.id);
        
        // Update the item
        $firebase(itemRef).$set({
            id: item.id,
            name: item.name,
            completed: !item.completed
        });
    };
    
    
});

BlocItOff.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    
    $stateProvider.state('index', {
        controller: 'index',
        templateUrl: '/index'
    });
    
    $stateProvider.state('signup', {
        url: '/signup',
        controller: 'signup',
        templateUrl: '/signup'
    });
    
    $stateProvider.state('tasks', {
        url: '/tasks',
        controller: 'tasks',
        templateUrl: '/tasks'
    });
    
}]);

BlocItOff.controller("index", function($scope) {
    var GEN_TASK_NUMBER = function() {
        var taskNum = Math.random();  
        console.log(taskNum);
    };
});

BlocItOff.controller("signup", function($scope, $firebase) {
    var ref = new Firebase("https://bloc-me-off.firebaseio.com/");
    // ref.authWithOAuthPopup("facebook", function(error, authData) {
    //     if (error) {
    //         console.log("Login Failed!", error);
    //     } else {
    //         console.log("Authenticated successfully with payload:", authData);
    //     }
    // })
});

