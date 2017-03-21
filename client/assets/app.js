var app = angular.module('myApp', ['ngRoute', 'ngCookies']);
app.config( function ( $routeProvider ) {
	$routeProvider
		.when('/login', {
			templateUrl: 'partials/login.tpl.html',
			controller: 'loginController'
		})
		.when('/wall', {
			templateUrl: 'partials/wall.tpl.html',
			controller: 'loginController'
		})
		.otherwise({
			redirectTo: '/login'
		});
});