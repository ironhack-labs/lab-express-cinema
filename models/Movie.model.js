
// 1. IMPORTACIONES
const mongoose	= require("mongoose")


// 2. SCHEMA (Requisitos para crear una movie)
const movieSchema = mongoose.Schema({

	title: String,
    director: String,
    stars: [ String ],
    image: String, 
    description: String,  
    showtimes: [ String ]
},
{
	timestamps: true // ESTABLECER LA FECHA EN LA CUAL FUE CREADO
})


// 3. MODELO (Se crea el modelo)
const Movie = mongoose.model("Movie", movieSchema)



// 4. EXPORTACIÓN del modelo para utilizarlo en otras partes del proyecto
module.exports = Movie



