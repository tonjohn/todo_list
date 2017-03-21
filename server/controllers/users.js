var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {
	index: function(req,res){
		User.find({}, function ( err, users ) {
			console.log("Users:", users);
			res.json(users);
		});
	},
	register: function(req,res){
		console.log("Received create request:", req.body);
		var user = new User(req.body);
		user.save( function ( err, newuser ) {
			if(err)
			{
				console.log('something went wrong');
				console.log(err.message);
				res.json(err);
			}
			else
			{
				res.json({current_user: {_id: newuser._id, first_name: newuser.first_name, last_name: newuser.last_name, email: newuser.email}});
			}
		});
	},
	login: function(req,res){
		console.log("Received login request:", req.body);
		User.findOne({email: req.body.email}, function ( err, data ) {
			if(err)
			{
				console.log('something went wrong');
				console.log(err.message);
				res.json(err);
			}
			else if( data && data.checkPassword(req.body.password))
			{
				res.json({current_user:{_id: data._id, first_name: data.first_name, last_name: data.last_name, email: data.email}});
			}
			else{
				res.json({errors: {loginForm: { message: "user name and/or password is invalid"}}})
			}
		});
	},
	update: function(req,res){
		console.log("Show User ID:", req.params.id);
		User.findOne({_id:req.params.id}, function ( err, user ) {
			console.log("User:", user);
			user.firstName = req.body.firstName;
			user.lastName = req.body.lastName;
			user.dob = req.body.dob;
			user.save( function ( err ) {
				console.log("Update Error", err);
				res.json(err);
			});
			
		})
	},
	delete: function(req,res){
		User.remove({_id:req.params.id}, function(err, dog) {
			console.log("Error:", err);
			res.json({error: err});
		});
	},
	show: function(req,res){
		console.log("Show User ID:", req.params.id);
		User.findOne({_id:req.params.id}, function ( err, user ) {
			console.log("User:", user);
			res.json(user);
		})
	}
};