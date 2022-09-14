const mongoose = require("mongoose");

const movie_schema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
    unique: true,
  },
  director: {
    type: String,
    require: true,
    unique: true,
  },
  stars: {
    type: Array,
    require: true,
    unique: true,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
    require: true,
    unique: true,
  },
  showtimes: {
    type: Array,
  },
});

const Movie = mongoose.model("movie", movie_schema);

module.exports = { Movie };
