const { Schema, model } = require("mongoose");

const movieSchema = new Schema({
    title: {
      type: String,
      required: true,
    },
    director: {
      type: String,
      required: true,
    },
    stars: {
      type: [String],
      required: true,
    },
    image: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    showtimes: {
        type: [String]
    }
  });
  
  const Movie = model("Movie", movieSchema);
  
  module.exports = Movie;    