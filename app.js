/**
 * Module dependencies.
 */

var express = require('express'), routes = require('./routes');

var app = module.exports = express.createServer();

// Configuration

app.configure(function() {
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(__dirname + '/public'));
});

app.configure('development', function() {
	app.use(express.errorHandler({
		dumpExceptions : true,
		showStack : true
	}));
});

app.configure('production', function() {
	app.use(express.errorHandler());
});

//Configure database connection
var dbURL = 'mongodb://localhost/test';
var db = require('mongoose').connect(dbURL);

// Routes
require('./routes/index')(app);
require('./routes/user')(app);
require('./routes/fingerprint')(app);
require('./routes/place')(app);
require('./routes/geofence')(app);

app.listen(3000, function() {
	console.log("Express server listening on port %d in %s mode",
			app.address().port, app.settings.env);
});
