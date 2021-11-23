// IMPORTACIONES
const mongoose = require("mongoose")


// SCHEMA
const movieSchema =  mongoose.Schema({ //requisitos para crear un libro
    title: String,
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtime: [String]
},
{
   timestamps: true //para establecer la  fecha en la cual fue creado 
})

const Movie = mongoose.model("Movie", movieSchema)

module.exports = Movie