
const mongoose = require('mongoose')

const moviesSchema = new mongoose.Schema( {
    title: {
        type: String,
        trim: true,
        set: value => value.charAt(0).toUpperCase() + value.substring(1).toLowerCase()
    },
    director: {
        type: String,
        trim: true,
        set: value => value.charAt(0).toUpperCase() + value.substring(1).toLowerCase()
    },
    stars: {
        type: [String]
    },
    image: {
        type: String,
    },
    description: {
        type: String
    },
    showtimes: {
        type: [String]
    }
}) 
    
    
    const movies = mongoose.model('Movies', moviesSchema)
    
    module.exports = movies
