const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: { type: String, require: true, unique: true },
  director: String,
  stars: Array,
  image: String,
  description: { type: String, require: true },
  showtimes: Array
});

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;
