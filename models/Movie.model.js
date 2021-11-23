// 1 IMPORTACIONES
const mongoose = require ("mongoose")

//2 SCHEMA
const moviesSchema = mongoose.Schema ({
    title: String,
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes: [String],
},
{
    timestamps: true // establece la fecha en la que fue creado
})


//3 MODELO 
const Movie = mongoose.model("Movie", moviesSchema)


//4 EXPORTACION
module.exports= Movie
