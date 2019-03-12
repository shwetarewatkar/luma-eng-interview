var mongoose = require('mongoose');

var doctorInfo = new mongoose.Schema({
    doctorId: { type: 'String', required:' Doctor ID is required', unique:true },
	doctortName: { type: 'String', required:' Doctor Name is required' },
	doctorHours: { type: [ 'Mixed'] },
	updated_at: { type: 'Date' }
});

module.exports = mongoose.model('doctorInfo', doctorInfo);