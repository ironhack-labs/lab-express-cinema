const mongoose = require('mongoose'); //aquí requiero el mongoose

//aquí hago el modelo del schema

const movieSchema = new mongoose.Schema({
    title: String,
    director: String,
    stars: [ String ],
    image: String,
    description: String,
    showtimes: [ String ]
})

// meto en una const que Movies tiene este esquema
const Movies = mongoose.model("Movies", movieSchema)

module.exports = Movies