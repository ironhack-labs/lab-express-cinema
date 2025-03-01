// ./models/Movie.model.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// CREATE SCHEMA
// Schema - describes and enforces the structure of the documents
const movieSchema = new Schema({
    title: String,
    director: String,
    stars: {type: [String]},
    image: String, 
    description: String,
    showtimes: {type: [String]}
});


// CREATE MODEL
// The model() method defines a model (Book) and creates a collection (books) in MongoDB
// The collection name will default to the lowercased, plural form of the model name:
//                          "Movie" --> "movies"
const Movie = mongoose.model("Movie", movieSchema);


// EXPORT THE MODEL
module.exports = Movie;
