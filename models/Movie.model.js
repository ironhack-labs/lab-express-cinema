const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    director: {
        type: String,
        required: true,
    },
    starts: {
        type: [String],
    },
    image: {
        type: String,
        default: "https://via.placeholder.com/150",
    },
    description: {
        type: String,
    },
    showtimes: {
        type: [String],
    },
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;