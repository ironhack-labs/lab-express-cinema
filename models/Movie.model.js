//1 - Importo
const mongoose = require("mongoose");

// 2- Schema
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
    timestamp: true,
  }
);

//Model
const Movie = mongoose.model("Movie", movieSchema);

//Exportación

module.exports = Movie;
