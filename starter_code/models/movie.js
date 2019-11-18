
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: String,
  director: String,
  stars: Array,
  image: String,
  rating: Number,
  description: String,
  showtimes: Array

}, {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  });

const Movie = mongoose.model("movies", movieSchema);

module.exports = Movie;