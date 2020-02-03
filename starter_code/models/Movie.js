const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String
  },
  director: String,
  stars: Array,
  image: String,
  description: String,
  showtimes: Array
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
