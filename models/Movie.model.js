const { Schema, model } = require('mongoose')

// schema
const movieSchema = new Schema({
    title: String,
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes: [String]
})

// model
const Movie = model('movie', movieSchema)

module.exports = Movie