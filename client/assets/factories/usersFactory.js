console.log( 'Users Factory' );

app.factory('usersFactory', ['$http', function ( $http ) {
	var factory = {};
	
	factory.index = function ( callback ) {
		
		$http.get('/users').then(function ( returned_data ) {
			console.log(returned_data);
			callback(returned_data.data);
		});
	};
	
	factory.login = function ( user, callback ) {
	
			$http.post('/users/login', user).then( function ( res ) {
				console.log('Login Response:', res );
				if( typeof(callback) == 'function')
				{
					callback(res.data);
				}
			});
	};
	
	factory.register = function ( user, callback ) {
		
		$http.post('users/register', user).then( function ( res ) {
			console.log('Register Response:', res);
			if( typeof(callback) == 'function')
			{
				callback(res.data);
			}
		})
	};
	
	return factory;
	
}]);