const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const movieSchema = new Schema(
    {
        title: { type: String },
        director: { type: String },
        stars: { type: [{type: String}] },
        image: { type: String },
        description: { type: String },
        showtimes: { type: [{type: String}] }

    }
);

const Movie = model('Movie', movieSchema);

module.exports = Movie;