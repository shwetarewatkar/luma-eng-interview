var mongoose = require('mongoose');

var appointmentInfo = new mongoose.Schema({
    appointmentNumber : {type: String, required:' appointment number is required', unique:true},
    patientID: {type: String, required: 'patient id is required'},
    doctorID: {type: String, required: 'doctor id is required'},
    appointmentTime : {type: Number, required:'Appointment Time is required'},
    updated_at : {type: Date, default: Date.now}
});

module.exports = mongoose.model('appointmentInfo', appointmentInfo);