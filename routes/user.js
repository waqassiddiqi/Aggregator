
var User = require('../data/model/user');
var loadUser = require('./middleware/load_user');


module.exports = function(app) {
	app.get('/user/', function(req, res) {
		User.find().lean().exec(function(err, users) {
			return res.end(JSON.stringify(users));
		});
	});
	
	app.post('/user/', function(req, res, next) {
		
		console.log(req.body.accounts);
		
		User.findOne({ 'accounts.uid': req.body.accounts[0].uid }, function (err, user) {
			
			if(user)
				return res.send('Conflict', 409);
			else {
				User.create(req.body, function(err, new_user) {
					if(err)
						return next(err);
					
					return res.send(JSON.stringify(new_user), 200);
				});
			}		
		});
	});
	
	app.get('/user/:name', function(req, res) {
		res.render('user/profile', { title: 'User Profile' })
	});
}