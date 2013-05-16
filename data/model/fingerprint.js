var mongoose = require('mongoose');
var userSchema = require('../schemas/fingerprint');

var FingerPrint = mongoose.model('FingerPrint', userSchema);

module.exports = FingerPrint;