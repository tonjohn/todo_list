app.controller('wallController', ['$scope', '$location', 'usersFactory', function ( $scope, $location, usersFactory ) {
	
	$scope.current_user = usersFactory.getCurUser();
	if( !$scope.current_user)
	{
		$location.path('/');
	}
	
}]);