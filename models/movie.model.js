const { Schema, model } = require('mongoose');

const movieSchema = new Schema(
    {
        title: String,
        director: String,
        stars: Array,
        image: String,
        description: String,
        showtime: Array,
    },
    {
        timestamps: true
    }
);

module.exports = model('Movie', movieSchema)