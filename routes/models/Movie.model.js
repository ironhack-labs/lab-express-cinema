const { Schema, model } = require('mongoose')

const movieSchema = new Schema(
    {
        title: {
            type: String,

        },
        director: {
            type: String,
        },
        image: {
            type: String
        },
        description: {
            type: String
        },
        showtimes: {
            type: [String]
        }
    }
);

module.exports = model('Movie', movieSchema)