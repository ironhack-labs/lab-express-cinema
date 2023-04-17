import mongoose from 'mongoose';

//crea un modelo de esquema para movies
const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: false
    },
    stars: [{
        type: String,
        required: false
    }],
    image: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    showtimes: [{
        type: String,
        required: false
    }],
});

module.exports = dataMovies;