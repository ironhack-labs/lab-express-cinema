const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: { type: String },
  director: { type: String },
  stars: { type: [String] },
  image: { type: String },
  description: { type: String },
  showtimes: { type: [String] },
  timestamp: { type: Date, default: Date.now },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
