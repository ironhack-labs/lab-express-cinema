const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  // TODO: write the schema
  title: { type: String, required: true, unique: true },
  director: {
    type: String,
    required: true,
  },
  stars: { type: [String] },
  image: { type: String },
  description: {
    type: String,
  },
  showtimes: {
    type: [String],
  },
});

const Movies = mongoose.model("Movies", movieSchema);

module.exports = Movies;
