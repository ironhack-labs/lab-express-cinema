const { Schema, model } = require('mongoose')

const movieSchema = new Schema(
    {
        title: String,
        director: String,
        stars: [''],
        image: String,
        description: String,
        showtimes: [''],
    },
    {
        timestamps: true
    }
);

module.exports = model('Movie', movieSchema)