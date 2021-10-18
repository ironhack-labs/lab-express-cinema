// models/Movie.model.js

const { Schema, model } = require("mongoose");

const movieSchema = new Schema(
  {
    title: {String},
    director: {String},
    stars: {Number},
    images: {String},
    description: {String},
    showtimes: [Number],
  },
  {
    timestamps: true,
  }
);

module.exports = model("Movie", movieSchema);
