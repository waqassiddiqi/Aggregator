var mongoose = require('mongoose');
var GeofenceSchema = require('../schemas/geofence');

var Geofence = mongoose.model('Geofence', GeofenceSchema);

module.exports = Geofence;