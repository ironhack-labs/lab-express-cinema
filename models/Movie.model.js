const mongoose = require("mongoose");

const REQUIRED_FIELD_ERROR = require("../constants/errorMessages");

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, REQUIRED_FIELD_ERROR],
    },
    director: {
      type: String,
      required: [true, REQUIRED_FIELD_ERROR],
    },
    stars: {
      type: [String],
      required: [true, REQUIRED_FIELD_ERROR],
    },
    image: {
      type: String,
      required: [true, REQUIRED_FIELD_ERROR],
    },
    description: {
      type: String,
      required: [true, REQUIRED_FIELD_ERROR],
    },
    showtimes: {
      type: [String],
      required: [true, REQUIRED_FIELD_ERROR],
    },
  },
  { timestamps: true }
);

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;
