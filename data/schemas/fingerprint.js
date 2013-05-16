var mongoose = require('mongoose');

var FingerPrintSchema = new mongoose.Schema({
	creationDate: { type: Date, default: Date.now },
	geo: {lng: Number, lat: Number},
	user: Schema.ObjectId
});

FingerPrintSchema.index ({
    geo : '2d'
});

module.exports = FingerPrintSchema;