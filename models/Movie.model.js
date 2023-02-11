const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    title: String,
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes: [String],
  },
  {
    timestamps: true,
  }
);

const MovieModel = mongoose.model("movie", movieSchema);

module.exports = MovieModel;
