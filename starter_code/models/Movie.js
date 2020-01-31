const moongose = require('mongoose')
const { Schema } = require('mongoose')

const moviesSchema = new Schema({
    title: String,
    director: String,
    stars: Array,
    image: String,
    description: String,
    showtimes: Array
})

module.exports = moongose.model('Movies', moviesSchema)