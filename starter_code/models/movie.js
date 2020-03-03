const mongoose = require('mongoose');

const { Schema } = mongoose;

const movieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    stars: { type: String },
    image: { type: String },
    description: {
        type: String,
        required: true
    },
    showtime: {
        type: String,
        required: true
    }
}),

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie