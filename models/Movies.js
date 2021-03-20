const mongoose = require('mongoose');

const { Schema } = mongoose;

const moviesSchema = new Schema({
    title: { type: String, require: true },
    director: { type: String, require: true },
    stars: [{ type: String }],
    image: { type: String, require: true },
    description: { type: String },
    showtimes: [{ type: String }],
});

const Movies = mongoose.model('movie', moviesSchema);

module.exports = Movies;