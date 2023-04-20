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

module.exports = mongoose.model("movies", movieSchema);
