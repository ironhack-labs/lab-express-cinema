const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: { type: String, required: true, unique: true },
    director: { type: String, required: true},
    stars: [String],
    image: String,
    description: String,
    showtimes: [String]
})

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;