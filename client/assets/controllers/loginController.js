app.controller('loginController', ['$scope', '$location','$cookies', 'usersFactory', function ( $scope, $location, $cookies, usersFactory ) {
	
	$scope.index = function (  ) {
		// check if the user is already logged in and redirect
		console.log("loginController index");
		console.log($scope.current_user);
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
				return $location.path('/login')
			}
		}
		
		return $location.path('/list');
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
				
				$location.path('/');
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
				console.log("Registration Successful! User:", $scope.current_user );
				$cookies.putObject('curUser', $scope.current_user);
				
				$location.path('/');
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