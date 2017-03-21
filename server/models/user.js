console.log('users model');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var UserSchema = new mongoose.Schema({
	first_name:  { type: String, required: true, minlength: 2},
	last_name:  { type: String, required: true, minlength: 2},
	email: {unique: true, required: true, minlength: 5, type: String,
		trim: true,
		lowercase: true,},
	password: { type: String, required: true},
}, {timestamps: true });


UserSchema.methods.generateHash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

// checking if password is valid
UserSchema.methods.checkPassword = function(password) {
	return bcrypt.compareSync(password, this.password);
};

UserSchema.pre('save', function(done) {
	console.log("Pre save function")
	this.password = this.generateHash(this.password);
	console.log("Hashed password:", this.password);
	done();
	
	// if( /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test( this.password ) == false )
	// {
	// 	var err = new Error("Password failed validation, you must have at least 1 number, uppercase and special character");
	// 	console.log("ERROR!!!!");
	// 	done(err);
	// }
	// else
	// {
	// 	this.password = this.generateHash(this.password);
	// 	done();
	// }
	
});

var User = mongoose.model('User', UserSchema);