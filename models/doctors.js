var mongoose = require('mongoose');

var doctorInfo = new mongoose.Schema({
    doctorId : {type: String, required:' Doctor ID is required', unique:true},
    doctortName : {type: String, required:'Doctor Name is required'},
    doctorHours:[
        {Monday: String, timeStart: String, endTime: String},
        {Tuesday: String, timeStart: String, endTime: String},
        {Wednesday: String, timeStart: String, endTime: String},
        {Thursday: String, timeStart: String, endTime: String},
        {Friday: String, timeStart: String, endTime: String},
        {Saturday: String, timeStart: String, endTime: String},
        {Sunday: String, timeStart: String, endTime: String}
    ],
    updated_at : {type: Date, default: Date.now}
});

module.exports = mongoose.model('doctorInfo', doctorInfo);