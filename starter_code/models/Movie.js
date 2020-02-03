const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String
  },
  director: String,
  stars: [],
  image: String,
  description: String,
  showtimes: []
  });

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
