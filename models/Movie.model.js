const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const movieSchema = new mongoose.Schema({
  title: String,
  director: String,
  stars: [String],
  image: String,
  description: String,
  showtimes: [String],
});


module.exports = model("Movie", movieSchema, "movies");
