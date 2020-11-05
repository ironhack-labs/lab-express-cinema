// Create a folder models and in it add the Movie.model.js file for the Movie model;
const mongoose = require("mongoose")
const Schema = mongoose.Schema


const movieSchema = new Schema(
  {
    title: String,
    director: String,
    stars: [ String ],
    image: String,
    description: String,
    showtimes: [ String ],
  },

);

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
