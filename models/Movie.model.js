const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const labelSchema = new Schema({
  title: String,
  director: String,
  stars: [String],
  image: String,
  description: String,
  showtimes: [String],
});

const MovieModel = mongoose.model("movie", labelSchema);

module.exports = MovieModel;
