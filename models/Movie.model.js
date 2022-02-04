// IMPORTACION
const { time } = require("console")
const mongoose = require("mongoose")
const { isArray } = require("util")

//SCHEMA
const movieSchema = mongoose.Schema({
    title: {
        type:String,
        required: true,
        unique:true
    },
    director: {
        type:String,
        required: true
    },
    stars : {
        type: [String],
        required: true
    },
    image: {
        type:String,
        required: true
    },
    description: {
        type:String,
        required: true
    },
    showtimes: {
        type: [String],
        required: true
    },

})

//MODELO
const Movie = mongoose.model("Movie", movieSchema)

//EXPORTACION
module.exports = Movie