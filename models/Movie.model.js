const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    director: {
        type: String,
        required: true,
        unique: true
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