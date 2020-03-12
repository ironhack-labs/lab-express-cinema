const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = new Schema({
    title: 'string',
    director: 'string',
    stars: 'array',
    image: 'string',
    description: 'string',
    showtimes: 'array'
})

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie;