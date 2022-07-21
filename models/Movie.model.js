const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required']
    },
    director: {
        type: String,
        required: [true, 'Director is required']
    },
    stars: {
        type: [String],
        required: [true, 'Director is required'],
    },
    image: {
        type: String,
        default: 'https://via.placeholder.com/150'
    },
    description: {
        type: String,
        required: [true, 'Description is required']
    },
    showtimes: {
        type: [String],
        required: [true, 'Showtimes is required']
    }
})

const Movie = mongoose.model('Movie', movieSchema)
module.exports = Movie