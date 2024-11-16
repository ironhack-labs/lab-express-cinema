const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: [true, "A movie needs a title"],
    },
    director: {
        type: String,
        required: [true, " A Movie needs a director"]
    },
    stars: {
        type: [String], 
        required: [true]
    },
    image: {
        type: String,
        required: [true]
    },
    description: {
        type: String,
        required: [true]
    },
    showtimes: {
        type: [String]
    }
})

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie