const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const movieSchema = new Schema({
  title: String,
  director: String,
  stars: Array,
  image: String,
  description: String,
  showtimes: Array,
});
const movieSchema = mongoose.model("label", movieSchema);

module.exports = movieSchema;
