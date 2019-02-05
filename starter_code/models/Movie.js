const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const movieSchema = new Schema(
  {
    title: { type: String, required: true },
    director: { type: String, required: true },
    stars: { type: [String] },
    image: { type: String, default: "/images/default.png" },
    description: { type: String },
    showtimes: { type: [String] }
  },
  {
    timestamps: true
  }
);

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
