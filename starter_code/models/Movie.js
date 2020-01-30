const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    title: String,
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes: [String]
})

const MovieModel = mongoose.model("Movie", Schema);

module.exports = MovieModel;