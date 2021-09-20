//importar
const mongoose = require("mongoose")

//schema
const movieSchema = mongoose.Schema({
    title: String,
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes: [String]
})

//modelo
const Movie=mongoose.model("Movie", movieSchema)

//export
module.exports = Movie