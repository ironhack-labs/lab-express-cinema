//IMPORTACIONES
const mongoose= require('mongoose')
const {Schema, model}= mongoose

//SCHEMA
const movieSchema= new Schema({
    title: String,
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes: [String]
})

//GENERACION DEL MODELO
const Movie= model('Movie', movieSchema)

//EXPORTACIONES
module.exports= Movie