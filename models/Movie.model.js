const mongoose = require("mongoose")

const Schema = mongoose.Schema

const moviesSchema = new Schema({

    title: {
        type: String,
        required: [true, 'error']
    },
    director: {
        type: String,
        required: [true, 'error']
    },
    stars: {
        type: [String],
        required: [true, 'error']
    },
    image: {
        type: String,
        required: [true, 'error']
    },
    description: {
        type: String,
        required: [true, 'error']
    },

    showtimes: {
        type:[String],
        required: [true, 'error']
    },

})
const Movie = mongoose.model('Movie', moviesSchema);
module.exports = Movie;