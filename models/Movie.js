const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const movieSchema = new Schema({
  title: String,
  director: String,
  image: String,
  description: String,
  showtimes: [String]
});

const Movie = mongoose.model("movie", movieSchema);

module.exports = Movie;