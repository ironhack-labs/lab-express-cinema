const { Schema, model } = require('mongoose')
const movieSchema = new Schema(
    {
        title: String,
        description: String,
        stars: [],
        image: String,
        description: String,
        showtimes: [],
    },

);

module.exports = model('Movie', movieSchema)