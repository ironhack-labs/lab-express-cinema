const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const moviesSchema = new Schema({
  title: String,
  director: String,
  stars: Array,
  image: String,
  description: String,
  showtimes: Array,
}, {
  timestamps: true
});

const Movie = mongoose.model("Movie", moviesSchema);

module.exports = Movie