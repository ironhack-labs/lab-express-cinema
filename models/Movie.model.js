const { Schema, model } = require('mongoose')
const filmSchema = new Schema(
    {
        title: {
            unique: true,
            type: String,
            required: true
        },
        director: {
            type: String,
            required: true
        },
        stars: {
            type: [String]
        },
        image: {
            type: String
        },
        description: {
            type: String,
            required: true
        },
        showtimes: {
            type: [String]
        }
    }
)
module.exports = model('Films', filmSchema)