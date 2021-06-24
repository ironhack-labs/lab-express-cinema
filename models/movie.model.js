const { Schema, model } = require('mongoose')

const movieSchema = new Schema(
    {
        title: {
            type: String
        },
        director: {
            type: String
        },
        stars: [String],
        image: {
            type: String
        },
        description: {
            type: String
        },
        showtime: [String]
    },
    {
        timestamp: true
    }
)

const Movie = model('Movie', movieSchema)

module.exports = Movie