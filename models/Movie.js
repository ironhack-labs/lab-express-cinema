const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Movie = mongoose.model('movie', new Schema({
    title: String,
    director: String,
    stars: Array,
    image: String,
    description: String,
    showtimes: Array,
}), "movies");

module.exports = Movie;
