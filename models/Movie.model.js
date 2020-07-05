const mongoose = require ('mongoose');

const movieSchema = mongoose.Schema({
    title: String,
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes: [String]
});

const Movie = mongoose.model('Movie', movieSchema)
module.exports = Movie