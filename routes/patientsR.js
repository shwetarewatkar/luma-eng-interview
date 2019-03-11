var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var patientInfo = require('../models/patients');

//get all patients
router.get('/', (req,res) => {
    patientInfo.find((err, patients) => {
        if(err)
            res.send(err);
        res.json(patients);
    });
});

//get patient by ID
router.get('/:id',(req, res) => {
    patientInfo.findById(req.params.id, (err, patientbyID) => {
        if(err)
            res.send(err);
        res.json(patientbyID);
    });
});

//add new patient entry
router.post('/', (req,res) => {
    patientInfo.create(req.body, (err, patientData) => {
        if(err)
            res.send(err);
        res.json(patientData);
    });
});

//update patient entry
router.put('/:id', (req, res) =>{
    patientInfo.findByIdAndUpdate(req.params.id, req.body, (err, patientData) =>{
        if(err)
            res.send(err);
        res.json(patientData);
    });
});

//delete patient
router.delete('/:id', (req, res)=>{
    patientInfo.findByIdAndRemove(req.params.id, req.body, (err, patientData)=>{
        if(err)
            res.send(err);
        res.json(patientData);
    });
});

module.exports = router;