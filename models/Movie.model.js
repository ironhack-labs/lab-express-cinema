//IMPORTACION
const mongoose = require('mongoose')


//SCHEMA
const movieSchema = mongoose.Schema({
    title: String,
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes: [String]
})

//MODEL
const Movie = mongoose.model("Movie",movieSchema)


//EXPORT
module.exports = Movie


