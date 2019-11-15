const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const moviesSchema = new Schema({
  // TODO: write the schema
  title: {
    type: String,
    required: true,
    unique: true
  },
  director: {
    type: String,
    required: true
  },
  stars: {
    type: []
  },
  description: {
    type: String
  },
  showtimes: {
    type: []
  },
  images: {
    type: String
  }
});

const movies = mongoose.model("movies", moviesSchema);
module.exports = movies;
