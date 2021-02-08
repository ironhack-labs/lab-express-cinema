// 1. IMPORTACIONES

const mongoose = require("mongoose")
const {Schema, model} = mongoose

// const Schema = mongoose.Schema
// const (Schema) = mongoose

// 2. SCHEMA

const movieSchema = new Schema({
    title: String,
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes: [String]
},)

// 3. GENERACIÓN DE MODELO
const Movie = model ('Movie',movieSchema)

// 4. EXPORTACIÓN
module.exports = Movie
