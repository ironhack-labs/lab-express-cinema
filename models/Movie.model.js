// 1. IMPORTACION

const mongoose = require("mongoose")

// 2. SCHEMA

const movieSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    stars: {
        type: Array,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    showtimes: {
        type: Array,
        required: true
    }
})

// 3. MODELO

const Movie = mongoose.model("Movie",movieSchema)

// 4. EXPORTAR MODULO

module.exports = Movie