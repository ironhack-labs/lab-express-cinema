// 1. Importaciones.

const mongoose = require("mongoose")

// 2. Schema
// Requisitos para crear un libro.

const movieSchema = mongoose.Schema({
    title: String,
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes: [String]
}, {timestamps: true })

// 3. Generación de modelo.

const Movie = mongoose.model("Movie", movieSchema)

// 4. Exportación.

module.exports = Movie