var mongoose = require('mongoose'), Schema = mongoose.Schema;

var PlaceSchema = new mongoose.Schema({
	place_id: Schema.ObjectId,
	place_name: String,	
});

module.exports = PlaceSchema;