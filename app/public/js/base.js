/**
 * You can put your site-wide javascript in this file.  Or just put it in another file and
 * include it in your layout.jade file. It's pretty easy either way.
 **/

var BlocItOff = angular.module("BlocItOff", [
    'firebase',
    'ui.router'
]);

BlocItOff.controller("tasks", function($scope, $firebase) {
    // var FRBlist = new Firebase("https://bloc-me-off.firebaseio.com/");
    // var sync = $firebase(FRBlist);
    // $scope.addItem = function(){
    //     FRBlist.set({
            
    //     }); 
    // };
    $scope.todos = [
        {'title':'Build a todo app','done':false}
    ];
    
    $scope.addTodo = function(){
        $scope.todos.push({'title':$scope.newTodo,'done':false});
        $scope.newTodo = '';
    };
    $scope.clearCompleted = function(){
        $scope.todos = $scope.todos.filter(function(item){
            return !item.done;
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
    var ref = new Firebase("https://bloc-it-off.firebaseio.com/");
    // ref.authWithOAuthPopup("facebook", function(error, authData) {
    //     if (error) {
    //         console.log("Login Failed!", error);
    //     } else {
    //         console.log("Authenticated successfully with payload:", authData);
    //     }
    // })
});