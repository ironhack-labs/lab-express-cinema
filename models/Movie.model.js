const { Schema, model } = require('mongoose')

const movieSchema = new Schema({
    title: {
        type: String,
    },
    director: {
        type: String,
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
})

const Movie = model('movie', movieSchema)

module.exports = Movie