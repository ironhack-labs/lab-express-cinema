const mongoose = require("mongoose");

const { Schema } = mongoose;

const moviesSchema = new Schema({
  title: { type: String, required: true },
  director: { type: String, required: true },
  stars: [{ type: String }],
  image: { type: String, required: true },
  description: { type: String },
  showtimes: [{ type: String }],
});

const Movies = mongoose.model("movie", moviesSchema);

module.exports = Movies;
