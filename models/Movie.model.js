const mongoose = require('mongoose');
const model = mongoose.model;
const Schema = mongoose.Schema;
const movieSchema = new Schema({
    title: {
        type: String,
        // required: true
    },
    director: {
        type: String,
        // required: true
    }, 
    author: {
        type: String,
        // required: true
    },
    stars: {
        type: [String],
        // required: true
    },
    image: {
        type: String,
        // required: true
    },
    description: {
        type: String,
        // required: true
    },
    showtimes: {
        type: [String],
        // required: true
    }
});

module.exports = model('Movie', movieSchema);