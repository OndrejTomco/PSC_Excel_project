const XLSX = require('xlsx');
const express = require('express');
const mongoose = require('mongoose');
const path = require("path");

const Obec = require('./obecModel');

const app = express();

app.use(express.static('Web'));

mongoose.connect('mongodb://localhost/PSCproject');

mongoose.connection.once('open',() => {
    console.log('databse found');
}).on('error', () => {
    console.log('error connecting to db', error);
})


app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname+'/Web/index.html'));
   
})

app.get('/posta/obec/:obec',(req,res) => {
    Obec.findOne({"OBEC":req.params.obec})
    .exec()
    .then(docs => {
        res.status(200).send(docs);
    })
    .catch(err => {
        res.status(500).json({
            error:err
        });
    });
});

app.get('/posta/psc/:psc',(req,res) => {
    Obec.findOne({"PSC":req.params.psc})
    .exec()
    .then(docs => {
        res.status(200).send(docs);
    })
    .catch(err => {
        res.status(500).json({
            error:err
        });
    });
});

app.listen(3000, () => {
    console.log('Server running');
});