var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var appointmentInfo = require('../models/appointment');

//get all appointment
router.get('/', (req,res) => {
    appointmentInfo.find((err, appointmentData) => {
        if(err)
            res.send(err);
        res.json(appointmentData);
    });
});

//get appointment by ID
router.get('/:id',(req, res) => {
    appointmentInfo.findById(req.params.id, (err, appointmentData) => {
        if(err)
            res.send(err);
        res.json(appointmentData);
    });
});

//add new appointment entry
router.post('/', (req,res) => {
    appointmentInfo.create(req.body, (err, appointmentData) => {
        if(err)
            res.send(err);
        res.json(appointmentData);
    });
});

//update appointment entry
router.put('/:id', (req, res) =>{
    appointmentInfo.findByIdAndUpdate(req.params.id, req.body, (err, appointmentData) =>{
        if(err)
            res.send(err);
        res.json(appointmentData);
    });
});

//delete doctor
router.delete('/:id', (req, res)=>{
    appointmentInfo.findByIdAndRemove(req.params.id, req.body, (err, appointmentData)=>{
        if(err)
            res.send(err);
        res.json(appointmentData);
    });
});

module.exports = router;