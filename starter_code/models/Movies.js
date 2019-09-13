const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: String,
  director: String,
  stars: [],
  image: String,
  description: String,
  showtimes: []
});

const Movies = mongoose.model("Movies", movieSchema);
module.exports = Movies;