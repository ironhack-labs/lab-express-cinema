const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// This is our Schema (not the model)
const movieSchema = new Schema({
    title: String,
    director: String,
    stars: Array,
    image: String,
    description: String,
    showtimes: Array
});

// This is our Model: An object that comes with methods which allow us to communicate with a collection in the db
const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie; // > so that we can use it in another file