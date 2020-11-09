const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const movieSchema = new Schema(
  {
    title: { type: String, unique: true },
    director: String,
    stars: [String],
    description: String,
    showTimes: [Number],
    image: String,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Movie", movieSchema);