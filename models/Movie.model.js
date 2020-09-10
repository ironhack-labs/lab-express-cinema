const mongoose = require('mongoose');

const { Schema } = mongoose;

const moviesSchema = new Schema({
    title: { type: String, required: true },
    director: { type: String, required: true },
    stars: { type: [String] },
    image: { type: String },
    description: { type: String },
    showtimes: { type: [String] },
});

const Movie = mongoose.model('Movie', moviesSchema);

module.exports = Movie;
