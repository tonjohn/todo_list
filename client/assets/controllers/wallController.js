app.controller('wallController', ['$scope', '$location', 'usersFactory', function ( $scope, $location, usersFactory ) {
	
	$scope.current_user = $scope.$parent.current_user;
	
}]);