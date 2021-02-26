const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieModel = new Schema({
    title: String,
    director: String,
    stars: Array,
    image: String, 
    description: String,
    showtimes: Array
  });

  const MovieModel = mongoose.model("Movie.model", movieModel);

  module.exports = MovieModel;