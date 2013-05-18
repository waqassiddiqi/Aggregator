var mongoose = require('mongoose');
var userSchema = require('../schemas/geofence');

var Geofence = mongoose.model('Geofence', userSchema);

module.exports = Geofence;