const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({

    title: {
         type: String,
         required: true,
         default: 'Unknown name',
         minlength: 2,
         maxlength:100,
         trim: true,
         set: value => value.charAt(0).toUpperCase() + value.substring(1).toLowerCase()
    },

    director: {
        type: String,
        required: true,
        default: 'Unknown director',
        minlength: 2,
        maxlength:100,
    },

    stars: {
        type: [String],
        required: true,
        default: ['Unknown stars'],
    },

    image: {
        type: String
    },

    description: {
        type: String
    },

    showTimes: {
        type: [String],
    }
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;