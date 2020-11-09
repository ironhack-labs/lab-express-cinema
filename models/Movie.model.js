const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const movieSchema = new Schema(
  {
    title: { type: String, unique: true },
    director: String,
    stars: [String],
    image: String,
    description: String,
    showTimes: [String],
  },
  {
    timestamps: true,
  }
);

module.exports = model("Movie", movieSchema);