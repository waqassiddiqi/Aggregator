var FingerPrint = require('../data/model/fingerprint');

module.exports = function(app) {
	app.post('/fingerprint/', function(req, res, next) {		
		console.log(req.body);
		
		FingerPrint.create(req.body, function(err) {
			if(err)
				return next(err);
			
			return res.send('OK', 200);
		});
	});
}