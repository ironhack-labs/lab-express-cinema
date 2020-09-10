const mongoose = require('mongoose')
const {Schema} = mongoose

const movies = new Schema({
    title: {
        type: String,
        required: true,
    },
    director: {
        type: String,
        required: true
    },
    stars: {
        type: [String],
        required: true
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
        type: [String],
        required: true
    }
})


const Movies = mongoose.model('Movies', movies)

module.exports = Movies