const { Schema, model } = require("mongoose");

const moviesSchema = new Schema({
  title: String,
  director: String,
  stars: [String],
  image: String,
  description: String,
  showtimes: [String],
});

module.exports = model("Movie", moviesSchema);
