const { Schema, model } = require('mongoose');

const moviesSchema = new Schema({
    title: { type: String, unique: true, require: true },
    director: { type: String },
    stars: [{
        type: String
    }],
    image: { type: String },
    description: { type: String },
    showtimes: [{ type: String }]
});

const movieModel = model('movies', moviesSchema);

module.exports = movieModel;