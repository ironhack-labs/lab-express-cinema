const mongoose = require("mongoose");

const FilmSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    director: {
        type: String,
        required: true,
    },
    stars: {
        type: [String],
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
    showtimes: {
        type: [String],
        required: true,
    }
})

const Film = mongoose.model('Film', FilmSchema);

module.exports = Film;