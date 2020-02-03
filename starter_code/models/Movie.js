const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  director: {
    type: String,
    required: true
  },
  stars: Array,
  image: String,
  description: String,
  showtimes: Array
});
const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
