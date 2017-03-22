var users = require('../controllers/users');
var lists = require('../controllers/todoLists')

module.exports = function ( app ) {

	app.post('/users/login', function ( req, res ) {
		users.login(req,res);
	});
	
	app.post('/users/register', function ( req, res ) {
		users.register(req,res);
	});

	app.post('/todoList', function( req, res) {
		lists.create(req, res);
	});

	app.get('/todoList', function( req, res ) {
		lists.getIndex(req, res);
	});

	app.put('/todoList', function( req, res ) {
		lists.checked(req, res);
	});


};
