const mongoose = require('mongoose');

const moviesSchema = new mongoose.Schema(
    {
        title: String,
        description: String,
        stars: [String],
        image: String,
        description: String,
        showtimes: [String],

    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Movies', moviesSchema);