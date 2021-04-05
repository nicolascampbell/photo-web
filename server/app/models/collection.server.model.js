//require mongoose
const mongoose=require('mongoose');

//Define a Schema
const Schema=mongoose.Schema;

//Subdocument for the Images in Mongo
let imageSchema = new Schema ({
    title: String,
    id: Number,
    description: String,
    path: String,
    pathHQ:String,
});

//Generalized version of Films to be able to accept also Collections
let collectionSchema = new Schema ({
    name: String,
    description: String,
    images: [ imageSchema ],
    isFilm: Boolean,
    date: String,
    place: String,
    brand: String,
    color: String,
    coverFotoId: Number,
});

module.exports=mongoose.model('Collection', collectionSchema);