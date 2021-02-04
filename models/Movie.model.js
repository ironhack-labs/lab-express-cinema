const mongoose = require("mongoose");



const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: {
        type: String,
        required: true

    },
    director: {
        type: String,
        required: true
    },
    stars: {
        type: [String],
        required: true
    },
    image: {
        type: String,
    },
    description: String,
    showtimes: [String]
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;