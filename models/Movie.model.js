// {
//       title: "Red Sparrow",
//       director: "Francis Lawrence",
//       stars: ["Jennifer Lawrence", "Joel Edgerton", "Matthias Schoenaerts"],
//       image:
//         "https://images-na.ssl-images-amazon.com/images/M/MV5BMTA3MDkxOTc4NDdeQTJeQWpwZ15BbWU4MDAxNzgyNTQz._V1_UX182_CR0,0,182,268_AL_.jpg",
//       description:
//         "Ballerina Dominika Egorova is recruited to 'Sparrow School,' a Russian intelligence service where she is forced to use her body as a weapon. Her first mission, targeting a C.I.A. agent, threatens to unravel the security of both nations.",
//       showtimes: ["13:00", "15:30", "18:00", "20:10", "22:40"]
//     }

// esquema => modelo, entonces se crea la DB

//mongoose nos permite trabajar con DB, puente entre VS y MongoDB
// express = usar nuestro PC como un servidor 
// MongoDB base de datos 
//const seeds = require("../model/movies.seed") es un ejemplo de importar (tiene que tener un export) codigo nuestro , 
//por esto se usan ../ , ya que no es una libreria

const mongoose = require("mongoose")

const moviesSchema = new mongoose.Schema(
    {     
    title: String,  //sin comillas porque String es un objeto de un Schema
    director: String, 
    stars: [String], 
    image: String, 
    description: String, 
    showtimes: [String]
    }
)
//Ahora cremamos el modelo para darle la capacidad a Moongose de crear una coleccion en una DB
//Creamos una coleccion "Movies", y el segundo parametro es la const del Schema, luego creamos la DB
const modeloDeMovies = mongoose.model('Movies', moviesSchema)

// objeto.objeto 
module.exports = modeloDeMovies 

