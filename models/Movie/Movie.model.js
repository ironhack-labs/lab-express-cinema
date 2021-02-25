const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieModel = new Schema({
  title: {
    type: String, 
    required: true
  },
  director: {
    type: String

  },
  stars: {
    type: [String]
  },
  image: {
    type: String

  },
  description:{
    type: String

  },
  showtimes: {
    type: [String]

  }
});


const MovieModel = mongoose.model("movies", movieModel)

module.exports = MovieModel;
