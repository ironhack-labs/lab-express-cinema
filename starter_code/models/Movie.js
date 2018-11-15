const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    title: {
        type: String
    },
    director: {
        type: String
    },
    stars: {
        type: Array
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    showtimes: {
        type: Array
    }
});

const Movie = mongoose.model('Movie', MovieSchema);
module.exports = Movie;
