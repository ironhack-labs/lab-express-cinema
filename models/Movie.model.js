const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const MovieSchema = new Schema({
  title: String,
  director: String,
  stars: Array,
  image: String,
  description: String,
  shwtimes: Array,
});

module.exports = model("movies", MovieSchema);
