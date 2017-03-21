app.controller('loginController', ['$scope', '$location','$cookies', 'usersFactory', function ( $scope, $location, $cookies, usersFactory ) {
	
	$scope.index = function (  ) {
		// check if the user is already logged in and redirect
		console.log("loginController index");
		if( !$scope.current_user )
		{
			var user = $cookies.getObject('curUser');
			if( user )
			{
				$scope.current_user = user;
				$scope.current_user.auth = "cookie";
			}
			else
			{
				$location.path('/login')
			}
		}
	};
	$scope.index();
	
	$scope.login = function (  ) {
		
		usersFactory.login($scope.user, function ( data ) {
			
			if( !data.errors )
			{
				$scope.user = {};
				$scope.errors = {};
				$scope.loginForm.$setPristine(true);
				$scope.current_user = data.current_user;
				$scope.current_user.auth = "password";
				
				$cookies.putObject('curUser', $scope.current_user);
				
				$location.path('/wall');
			}
			else
			{
				$scope.errors = data.errors;
			}
			
		});
	};
	
	$scope.register = function (  ) {
		
		usersFactory.register( $scope.user, function ( data ) {
			
			if( !data.errors )
			{
				$scope.user = {};
				$scope.errors = {};
				$scope.loginForm.$setPristine(true);
				$scope.current_user = data.current_user;
				$scope.current_user.auth = "password";
				$location.path('/wall');
			}
			else
			{
				$scope.errors = data.errors;
			}
			
		});
	};
	
	$scope.logout = function (  ) {
		
		$scope.current_user = {};
		$cookies.remove('curUser');
		$location.path('/login');
		
	}
	
}]);