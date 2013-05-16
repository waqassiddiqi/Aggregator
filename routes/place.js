var Place = require('../data/model/place');

module.exports = function(app) {
	app.post('/place/', function(req, res, next) {		
		console.log(req.body);
		
		Place.create(req.body, function(err) {
			if(err)
				return next(err);
			
			return res.send('OK', 200);
		});
	});
}