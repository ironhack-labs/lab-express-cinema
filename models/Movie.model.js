const { Schema, model } = require('mongoose');

const movieSchema = new Schema(
    {
        title: String,
        director: String,
        stars: [String],
        rating: Number,
        image: String,
        description: String,
        showtimes: [String],
    },
    {
        timestamps: true //Te da fecha de create and update
    }
);

module.exports = model('Movie', movieSchema);