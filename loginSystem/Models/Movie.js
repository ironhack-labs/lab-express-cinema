const mongoose = require('mongoose')
const Schema = mongoose.Schema

var movieSchema = new Schema({
    movie: String,
    year: String,
    director: String,
})

module.exports = mongoose.model("movie", movieSchema)
