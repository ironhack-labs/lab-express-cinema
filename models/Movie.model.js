const { Schema, model } = require('mongoose')
const movies = new Schema (
    {
        title: String,
        director: String,
        stars: {
            type: [String],
        },
        image: String,
        description: String,
        showtimes: {
            type: [String],
        }

    }
)
module.exports = model('Movie', movies)
