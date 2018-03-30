
// I RAN THIS FILE ONLY ONCE TO IMPORT EXCEL

const mongoose = require('mongoose');
const XLSX = require('xlsx');
let Obec = require('./obecModel');

mongoose.connect('mongodb://localhost/PSCproject');

let workbook = XLSX.readFile('PSCobci.xlsx');
let sheet_name_list = workbook.SheetNames;
let xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

console.log(xlData[0]);

Obec.count({}, function(err, count){
    console.log( "Number of docs: ", count );
});


//Bulk insert into DB, DO NOT RUN
//Obec.create(xlData);
   
 

