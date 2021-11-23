// 1. IMPORTACIONES
const mongoose = require("mongoose")

// 2. SCHEMA
// REQUISITOS PARA CREAR MOVIE
const movieSchema = mongoose.Schema({
    title: String,
    director: String,
    stars: [String],
    image: String,
    description: String,
    shotimes: [String],
}, {
    timestamps: true // ESTABLECER LA FECHA EN LA CUAL FUE CREADO
})

// 3. MODELO
const Movie = mongoose.model("Movie", movieSchema)

// 4. EXPORTACIÓN
module.exports = Movie