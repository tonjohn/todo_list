app.factory('todoListFactory', ['$http', function ( $http ) {
	var factory = {};

  factory.index = function( callback ) {
    $http.get('/todoList').then(function(res) {
      callback(res.data);
    })
  }

  factory.create = function( item, callback ) {
    $http.post('/todoList', item ).then(function( res ) {
      callback(res.data);
    })
  }

  factory.checked = function( id, callback ) {
    $http.put('/todoList', {id}).then(function( res ) {
      callback(res.data);
    })
  }



  return factory;
}]);
