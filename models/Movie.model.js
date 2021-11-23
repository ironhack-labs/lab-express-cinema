// IMPORTACIONES
const mongoose  = require("mongoose")

// SCHEMA
//REQUISITOS PARA CREAR UNA MOVIE
const movieSchema = mongoose.Schema({
    title: String,
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes:[String]

},
{
    timestamps: true 
})

// MODELO
const Movie = mongoose.model("movies",movieSchema)

// EXPORTACION
module.exports = Movie