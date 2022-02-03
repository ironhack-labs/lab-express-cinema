const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    stars: [String],
    image: {
        type: String,
        required: true
    },
    description: String,
    showtimes: [String],
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;