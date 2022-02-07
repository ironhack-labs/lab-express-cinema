const {Schema, model} = require('mongoose');

const movieSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        director: String,
        stars: Array(String),
        image: String,
        desciption: {
            type: String,
            trim: true
        },
        showtimes: Array(String)
    }
);

module.exports = model('Movie', movieSchema)