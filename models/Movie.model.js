const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema(
{
    title: {
        type: String,
        required: true,
    },
    director: {
        type: String,
        required: true,
    },
    stars: {
        type: Array,
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
    showTimes: {
        type: Array,
        required: true,
    }
},
{
  timestamps: true // createdAt, updatedAt -> Date
}

);

const Movie = mongoose.model('Movie',movieSchema);

module.exports = Movie;