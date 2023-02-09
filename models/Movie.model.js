const { Schema, model } = require('mongoose')

const movieSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    director: {
        type: String,
        required: true,
    },
    stars: {
        type: [String],
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
        type: [String]
    }
})
const Movie = model('movie', movieSchema)
module.exports = Movie