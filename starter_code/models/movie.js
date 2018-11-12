const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const movieSchema = new Schema (
  {
    title: {
      type: String,
      required: true,
    },
    director: {
      type: String,
    },
    stars: {
      type: [String],
      minlength: 1,
    },
    image: {
      type: String,
    },
    description: {
      type: String,
      minlength: 8,
    },
    showtimes: {
      type: [String]
    },
    })


const Movie = mongoose.model("Movie", movieSchema)

module.exports = Movie;