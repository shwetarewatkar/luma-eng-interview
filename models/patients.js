var mongoose = require('mongoose');

var patientInfo = new mongoose.Schema({
    patientId : {type: String, required:' Patient ID is required', unique:true},
    patientName : {type: String, required:'Patient Name is required'},
    updated_at : {type: Date, default: Date.now}
});

module.exports = mongoose.model('patientInfo', patientInfo);