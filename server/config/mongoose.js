console.log('future mongoose connection and model loading');

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var fs = require('fs');

var path = require('path');

mongoose.connect('mongodb://localhost/mean_friends');

var models_path = path.join(__dirname, './../models');

fs.readdirSync( models_path ).forEach( function ( file ) {
	if( file.indexOf('.js') >= 0 ){
		require(models_path + '/' + file);
	}
});