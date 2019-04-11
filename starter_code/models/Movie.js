const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const schema = new Schema({
  title: String,
  director: String,
  stars: Array,
  image: String,
  description: String,
  showtimes: Array
});

const Movie = mongoose.model("Movie", schema);

module.exports = Movie;