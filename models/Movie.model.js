const { Schema, model } = require("mongoose")

const movieSchema = Schema(
    {
        title: String,
        director: String,
        stars: [String],
        image: String,
        description: String,
        showtimes: [String]

    },
    {
        timestamp: true
    })


module.exports = model('Movie', movieSchema)
