const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const movieSchema = new Schema(
  {
    title: String,
    director: String,
    stars: [String],
    image: String,
    description: String
  },
);

const Movie = model("Movie", movieSchema);

module.exports = Movie;