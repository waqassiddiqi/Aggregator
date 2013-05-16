var mongoose = require('mongoose');
var userSchema = require('../schemas/place');

var Place = mongoose.model('Place', userSchema);

module.exports = Place;