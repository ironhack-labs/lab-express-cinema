const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema(
    {
        title: String,
        director: String,
        stars: Array,
        image: String,
        description: String,
        showtimes: Array,
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Movie', movieSchema);