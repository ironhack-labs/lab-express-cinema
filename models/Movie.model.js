const mongoose = require('mongoose')


const moviesSchema = new mongoose.Schema({
    title: {
        type: String
    },
    director: {
        type: String
    },
    stars: {
        type: [String]
    },
    image: {
        type: String
    },
    description: {
        type: String
    },
    showtimes: {
        type: [String]
    }
})

module.exports = mongoose.model('Movie', moviesSchema)