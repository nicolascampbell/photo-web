const express=require('./config/express');
const mongoose=require('./config/mongoose');
var db=mongoose();
let app=express();

module.exports=app;

console.log('Server gestartet');
