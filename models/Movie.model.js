const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const movieSchema = new Schema(
  {
    title: String,
    director: String,
    showtimes: [String],
    stars: Array,
    image: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Movie", movieSchema);