const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: { type: String, required: true, unique: true },
  director: String,
  stars: Array,
  image: String,
  description: String,
  showtimes: Array
});

const MovieModel = mongoose.model("Movie", movieSchema);

module.exports = MovieModel;
