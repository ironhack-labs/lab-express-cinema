const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: (type = String),
  director: (type = String),
  stars: (type = String),
  enum: [],
  image: (type = URL),
  description: (type = String),
  showtimes: (type = String),
  enum: [],
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
