var mongoose = require('mongoose')
	bcrypt = require('bcrypt'),
	SALT_WORK_FACTOR = 10;


var AccountSchema = new mongoose.Schema({
	kind: String, 
	uid: { type: String },
	password: String
});

var UserSchema = new mongoose.Schema({
	first_name: String,
	last_name: String,
	email: String,
	cell_number: String,
	
	accounts: [ AccountSchema ],
	
	devices: [ { device_id: String, device_type: String, os_version: String } ],
	
	account_type: String
});

module.exports = UserSchema;