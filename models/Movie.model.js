const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const moviesModel = new Schema({
    title: String,
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes: [String]
})
const MovieModel = mongoose.model("movies", moviesModel)
module.exports = MovieModel