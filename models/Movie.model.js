const { Schema, model } = require("mongoose");

const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  director: String,
  stars: [String],
  image: String,
  description: String,
  showtimes: [String],
});

const movieModel = model("movies", movieSchema);
module.exports = movieModel;
