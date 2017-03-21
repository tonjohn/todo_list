var users = require('../controllers/users');

module.exports = function ( app ) {

	app.post('/users/login', function ( req, res ) {
		users.login(req,res);
	});
	
	app.post('/users/register', function ( req, res ) {
		users.register(req,res);
	});
	
};