const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// CREATE SCHEMA
const movieSchema = new Schema({
  title: String,
  director: String,
  stars: [],
  image: String,
  description: String,
  showtimes: [],
});

// CREATE MODEL
const Ironcinema = mongoose.model("Ironcinema", movieSchema);

// EXPORT
module.exports = Ironcinema;
