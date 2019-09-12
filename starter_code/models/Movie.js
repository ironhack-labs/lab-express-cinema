const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movie = new Schema ({
    title: String,
    director: String,
    stars: Array,
    image: String,
    description: String,
    showtimes: Array,
});

const Movie = mongoose.model('Movie', movie)

module.exports = Movie;