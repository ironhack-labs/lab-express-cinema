const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const movieSchema = new Schema(
  {
    title: { type: String, required: true },
    director: { type: String },
    stars: { type: Array },
    image: { type: String },
    description: { type: String },
    showtimes: { type: Array }
  },
  {
    timestamps: true
  }
);

// create the Book model for the books collection
const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
