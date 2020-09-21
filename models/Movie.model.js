const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: String,
  director: String,
  stars: [String],
  image: { type: String, default: "images/default-avatar.png" },
  description: String,
  showtimes: [String],
});

const movie = mongoose.model("movie", movieSchema);

module.exports = movie;
