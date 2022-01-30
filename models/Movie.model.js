const { Schema, model } = require("mongoose");

const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  stars: {
    type: Array,
    required: true,
  },
  image: {
    type: String
  },
  description: {
    type: String,
    required: true,
  },
  showtimes: {
    type: Array,
    required: true,
  }
});

const Movie = model("Movie", movieSchema);

module.exports = Movie;