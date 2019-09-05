const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: String,
  director: String,
  stars: [String],
  image: String,
  description: String,
  showtimes: {
    type: [String],
    validator: v => /\d{2}:\d{2}/.test(v)
  }
});

const MovieModel = mongoose.model("Movie", movieSchema);

module.exports = MovieModel;
