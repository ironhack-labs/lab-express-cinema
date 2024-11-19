const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, 'A movie needs a title']
    },
    director: {
        type: String,
        required: [true, 'A movie needs a director']
    },
    stars: {
        type: [String],
        required: [true, 'A movie needs stars']
    },
    image:{
        type: String,
        required: [true, 'A movie requires a image'],
        default : 'https://www.kindpng.com/picc/m/18-189751_movie-placeholder-hd-png-download.png'
    },
    description: {
        type: String,
        required: [true, 'A movie needs a description']
    },
    showtimes: {
        type: [String],
        required: [true, 'A movie neeeds a showtime']
    }
})

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie; 