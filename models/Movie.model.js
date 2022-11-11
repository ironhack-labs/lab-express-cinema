const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema(
    {
        title: String,
        directors: String,
        starts: Array,
        image: String,
        description: String,
        showtimes: Array
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Movie', movieSchema);