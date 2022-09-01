const { Schema, model } = require('mongoose');

const movieSchema = new Schema({
    // TODO: write the schema
    title: { type: String },
    director: { type: String },
    stars: { type: [String] },
    image: { type: String },
    description: { type: String },
    showtimes: { type: [String] }
});

const MoviesModel = model('movies', movieSchema);

module.exports = MoviesModel;