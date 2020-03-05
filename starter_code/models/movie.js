const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: {
        type: String,
        require: true,
    },
    director: {
        type: String,
        require: true,
    },
    stars: {
        type: Array,
    }, 
    image: {
        type: String,
    },
    description: {
        type: String,
    },
    showtimes: {
        type: Array,
    }, 
    created: {
        type: Date,
        default: Date.now
    },
});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;
