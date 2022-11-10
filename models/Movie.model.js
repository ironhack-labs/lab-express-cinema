const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = new Schema({
    title: {
        type: String,
        required: true,
        set: value => value.charAt(0).toUpperCase() + value.substring(1)
    },
    director: {
        type: String,
        required: true,
    },
    stars: {
        type: [String],
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    showtimes: {
        type: [String],
        required: true,
    }
})

const Movie = mongoose.model('movie', movieSchema)

module.exports = Movie