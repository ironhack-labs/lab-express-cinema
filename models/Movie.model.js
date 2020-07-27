const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: {
        type: String,
        required: true //Para que sea obligatorio si añadimos pelis nuevas
    },
    director: {
        type: String,
        required: true
    },
    stars: {
        type: [String], //Array de strings
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
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;