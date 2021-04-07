const express=require('./config/express');
const mongoose=require('./config/mongoose');
let db=mongoose();
let app=express();

module.exports=app;

console.log('Server gestartet');
