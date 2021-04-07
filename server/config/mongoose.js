//Import the mongoose module
const mongoose = require('mongoose');
//Set up default mongoose connection
const mongoDB = 'mongodb://127.0.0.1:27017';
module.exports=function() {
    //TODO understand what are the other parameters
    mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
    //Get the default connection 
    //TODO understand why I need to do this
    let db = mongoose.connection;
    console.log("connected to database");
    //Bind connection to error event (to get notification of connection errors)
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    return db;
}
