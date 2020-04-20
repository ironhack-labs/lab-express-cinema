const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

const movieSchema = new mongoose.Schema({
  title: String,
  director: String,
  stars: Array,
  image: {
    type: String,
    default: `./starter_code/public/images/nofilm.jpg`
  },
  description: String,
  showtimes: Array
});

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;
