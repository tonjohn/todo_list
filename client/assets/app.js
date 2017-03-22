var app = angular.module('myApp', ['ngRoute', 'ngCookies']);
app.config( function ( $routeProvider ) {
	$routeProvider
		.when('/login', {
			templateUrl: 'partials/login.tpl.html',
			controller: 'loginController'
		})
		.when('/', {
			templateUrl: 'partials/wall.tpl.html',
			controller: 'loginController'
		})
		.when('/list', {
			templateUrl: 'partials/todoList.html',
			controller: 'loginController'
		})
		.otherwise({
			redirectTo: '/login'
		});
});
