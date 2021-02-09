// importacion

const mongoose = require('mongoose')
const { Schema, model } = mongoose

//Schema

const movieSchema = new Schema({
    title: String,
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes: [String]
})

//Generacion Modelo
const Movie = model('Movie', movieSchema)

//Exportacion
module.exports = Movie