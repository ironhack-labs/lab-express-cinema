const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const movieSchema = new Schema(
  {
    title: { type: String, required: true },
    director: { type: String },
    stars: { type: [String] },
    image: { type: String },
    description: { type: String, default: "Anonymous" },
    showtimes: { type: [String] }
  },
  {
    timestamps: true
  }
);

// create the "movie" model for the "movies" collection
const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
