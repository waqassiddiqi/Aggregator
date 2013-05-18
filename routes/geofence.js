var Geofence = require('../data/model/geofence');

module.exports = function(app) {
	app.post('/geofence/', function(req, res, next) {		
		
		console.log(req.body);
		
		Geofence.create(req.body, function(err) {
			if(err)
				return next(err);
			
			return res.send('OK', 200);
		});
	});
}