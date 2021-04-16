const mongoose = require('mongoose')

// Importar el Schema a partir de mongoose.
const Schema = mongoose.Schema

// Crear el Schema
const movieSchema = new Schema({
    title: {type: String},
    director: {type: String},
    stars: {type: [String]},
    image: {type: String},
    description: {type: String},
    showtimes: {type: [String]}
}, {versionKey: false})

// Crear el modelo a partir del Schema. Como primer argumento recibe el nombre del modelo y como segundo el nombre del Schema
const Movie = mongoose.model('Movie', movieSchema)

// Esportar el modelo
module.exports = Movie