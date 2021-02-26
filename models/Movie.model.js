const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieModel = new Schema({
  title: String,
  director: String,
  stars: [String],
  image: String,
  description: String,
  showtimes: []
});

const MovieModel = mongoose.model("movies", movieModel);

module.exports = MovieModel;