const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movies = new Schema({
    title: String,
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes: [String]
});

const moviesModel = mongoose.model("movies", movies);


module.exports = moviesModel;