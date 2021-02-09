    //importaciones

const mongoose = require('mongoose')
const {Schema, model} = mongoose


///dessutructuracion de object
//const Schema = mongoose.Schema
//const {Schema} = mongoose

const movieSchema = new Schema({
    title: String,
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes: [String]
  },
  {
    timestamps: true
})


//seed files rchivos con if que se ñaden en labd
//GENERACION DEL MODELO
const Movie = model('Movie', movieSchema)

//EXPORTACION

module.exports = Movie