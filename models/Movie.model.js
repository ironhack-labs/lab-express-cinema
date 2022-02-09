const mongoose = require('mongoose')
const Schema = mongoose.Schema

// require('../seeds/movies.seed');

const movieSchema = new Schema({
    title: {
        type: String,
    },
    director: {
        type: String,
    },
    stars: {
        type: [String],
    },
    image: {
        type: String,
    },    
    description: {
        type: String,
    },
    showtimes: {
        type: [String],
    }
});

const Movie = mongoose.model('Movie', movieSchema)
module.exports = Movie
