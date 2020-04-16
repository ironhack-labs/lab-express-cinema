const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schemaMovies = new Schema ({
    title: String,
    director: String,
    stars: Array,
    image: String,
    description: String,
    showtimes: Array
})

const Movie = mongoose.model('movie', schemaMovies)

module.exports = Movie