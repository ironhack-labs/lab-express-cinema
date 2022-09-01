const { Schema, model } = require('mongoose');

const moviesSchema = new Schema({
    title: { type: String },
    director: { type: String },
    stars: [{ type: String }],
    image: { type: String },
    description: { type: String },
    showtimes: [{ type: String }]
});

const MovieModel = model('movies', moviesSchema);

module.exports = MovieModel;