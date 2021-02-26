const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
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
  },
});

const MovieModel = mongoose.model("Movie", movieSchema)
module.export =  MovieModel