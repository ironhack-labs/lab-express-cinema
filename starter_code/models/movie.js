const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const moviesSchema = new Schema(
    {
        title: String,
        director: String,
        starts: Array,
        image: String,
        description: String,
        showtimes: Array
    }
)

module.exports = mongoose.model('Movies', moviesSchema)