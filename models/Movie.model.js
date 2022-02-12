const { Schema, model } = require("mongoose");

const movieSchema = new Schema({
  title: String,
  director: String,
  stars: [String],
  image: String,
  description: String,
  showtimes: [String],
});

const Movie = model("Movie", movieSchema);

module.exports = Movie;
