const mongoose = require('mongoose');
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
    stars: [
        { 
            type: String,
            required: true
        }
    ],
    image: {
        type: String
    },
    description: {
        type: String,
        required: true
    },
    showtimes: [
        { 
            type: String,
            required: true
        }
    ],
    createdOn: {
        type: Date,
        default: Date.now
    }
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;