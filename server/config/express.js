const express=require('express');
const path = require('path');
//var user=require('../app/models/user.server.model.js');

module.exports=function() {
    var app=express();
    
    //get static files 
    app.use(express.static('public'));   
    
    return app;
};

