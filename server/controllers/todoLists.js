var mongoose = require('mongoose');
var todoList = mongoose.model('todoList');

module.exports = {
  create: function(req, res ) {
    toDo = new todoList(req.body);
    toDo.save(function(err) {
		if( err ){
			res.json(err);
		}
		else
		{
			res.json(toDo);
		}
    })
  },
  getIndex: function( req, res ) {
  	console.log("Getting items for User ID", req.query.id);
    todoList.find({user: req.query.id}, function(err, data ) {
      if ( err ){
        res.json(err)
      } else { res.json(data) }
    })
  },
  checked: function( req, res ) {
  	if( req.body.id ){
		todoList.findOne({_id: req.body.id}, function(err, data ) {
			if( data.completed ) {
				data.completed= "";
			}
			else{
				data.completed = new Date();
			}
			data.save(function(err) {
				if( err ){
					res.json(err);
				}
				else
				{
					res.json(data);
				}
			})
		});
	}
    else {
  		res.json({errors: {todoListChecked: { message: "Cannot complete task - invalid item ID"}}});
	}
  }
}
