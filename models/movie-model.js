const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// CREATE SCHEMA
const movieSchema = new Schema({
  title: String,
  director: String,
  stars: [],
  image: String,
  description: String,
  showtimes: [],
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;