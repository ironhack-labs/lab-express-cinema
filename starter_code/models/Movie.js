const mongoose = require("mongoose");

const moviesSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String
  },
  description: String,
  director: String,
  stars: Array,
  image: String
});

const Movie = mongoose.model("Movie", moviesSchema);

module.exports = Movie;
