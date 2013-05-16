
var User = require('../data/model/user');
var loadUser = require('./middleware/load_user');


module.exports = function(app) {
	app.get('/users/', function(req, res) {
		User.find({}, function(err, users) {
			if(err) 
				return next(err);
			
			res.render('users/index', { title: 'Users list', users: users });
		});
	});
	
	app.post('/users/', function(req, res) {
		
		console.log(req.body);
		
		User.findOne({ username: req.body.username }, function (err, user) {
			if(err) {
				return next(err);
			}
			
			if(user) {
				return res.send('Conflict', 409);
			}
			
			User.create(req.body, function(err) {
				if(err)
					return next(err);
				
				res.redirect('/users/');
			});
		});
	});
	
	app.get('/users/:name', function(req, res) {
		res.render('users/profile', { title: 'User Profile' })
	});
}