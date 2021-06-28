const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    title: String,
    director: String,
    stars: Array,
    image: String,
    description: String,
    showTimes: Array
})

const MovieModel = mongoose.model('movie', movieSchema);

module.exports = MovieModel