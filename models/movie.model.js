const mongoose = require('mongoose')
// const Schema = moongose.Schema;

//Schema
const MovieSchema = new mongoose.Schema({
    title: String,
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes: [String]
})

const Movie = mongoose.model('Movie', MovieSchema)

module.exports = Movie;


