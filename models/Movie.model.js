const { Schema, model } = require("mongoose");


const MovieSchema = new Schema(
  {
    title: {
      type: String,
    },
    director: {
      type: String,
    }, 
    stars: {
        type: [String], 
    }, 
    image: {
        type: String, 
    },
    description: {
        type: String, 
    }, 
    showtimes: {
        type: [String],
    }

  }
);

const Movie = model("Movie", MovieSchema);

module.exports = Movie;