const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  title: String,
  director: String,
  stars: [String],
  image: String,
  description: String,
  showtimes: [String]
});

const Movie = mongoose.model("Movies", MovieSchema);

module.exports = Movie;
