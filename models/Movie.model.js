//1. IMPORTACIONES
const mongoose = require("mongoose");

//2.SCHEMA
const movieSchema = mongoose.Schema(
  {
    title: String,
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes: [String],
  },
  {
    timestamps: true, //Establecer la fecha en la cual fue creado
  }
);

//3. MODELO
const Movie = mongoose.model("Movie", movieSchema);

//4. EXPORTACION
module.exports = Movie;
