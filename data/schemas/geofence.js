var mongoose = require('mongoose'), Schema = mongoose.Schema;

var GeofenceSchema = new mongoose.Schema({
	place_id: Schema.ObjectId,
	tag: String,
	center: { geo: {lng: Number, lat: Number}, address: String },
	radius: Number,
	date_created: { type: Date, default: Date.now },
	expiry_date: { type: Date }
});

GeofenceSchema.index ({
    "center.geo" : '2d'
});

module.exports = GeofenceSchema;