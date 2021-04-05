//require mongoose
const mongoose=require('mongoose');

//Define a Schema
const Schema=mongoose.Schema;

//Subdocument for the Images in Mongo
let imagesSchema = new Schema ({
    title: String,
    id: Number,
    description: String,
    path: String,
});

//Generalized version of Films to be able to accept also Collections
let collectionSchema = new Schema ({
    name: String,
    description: String,
    images: [ imagesSchema ],
    isFilm: Boolean,
    date: String,
    place: String,
    brand: String,
    color: String,
    coverFotoId: Number,
});

