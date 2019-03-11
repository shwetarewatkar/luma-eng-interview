var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var doctorInfo = require('../models/doctors');

//get all doctors
router.get('/', (req,res) => {
    doctorInfo.find((err, doctorData) => {
        if(err)
            res.send(err);
        res.json(doctorData);
    });
});

//get doctor by ID
router.get('/:id',(req, res) => {
    doctorInfo.findById(req.params.id, (err, doctorData) => {
        if(err)
            res.send(err);
        res.json(doctorData);
    });
});

//add new doctor entry
router.post('/', (req,res) => {
    doctorInfo.create(req.body, (err, doctorData) => {
        if(err)
            res.send(err);
        res.json(doctorData);
    });
});

//update doctor entry
router.put('/:id', (req, res) =>{
    doctorInfo.findByIdAndUpdate(req.params.id, req.body, (err, doctorData) =>{
        if(err)
            res.send(err);
        res.json(doctorData);
    });
});

//delete doctor
router.delete('/:id', (req, res)=>{
    doctorInfo.findByIdAndRemove(req.params.id, req.body, (err, doctorData)=>{
        if(err)
            res.send(err);
        res.json(doctorData);
    });
});

module.exports = router;