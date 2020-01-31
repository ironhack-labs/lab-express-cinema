const moongose = require('mongoose');
const { Schema } = require('mongoose');

const moviesSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    stars: {
        type: Array
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    showtimes: {
        type: Array
    }
});

module.exports = moongose.model('Movies', moviesSchema);