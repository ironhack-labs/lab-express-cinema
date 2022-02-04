// 1.IMPORTACIÓN
const mongoose = require("mongoose")

// 2.SCHEMA 
const MovieSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    stars: {
        type: [String],
        required: true
    },
    description: {
        type: String,
        required: true
    },
    showtimes: {
        type: [String],
        required: true
    }
    
})

// 3. MODELO
const Movie = mongoose.model("Movie", MovieSchema)


// 4.EXPORTACIÓN
module.exports = Movie