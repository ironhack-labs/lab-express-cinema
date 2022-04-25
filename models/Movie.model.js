const { Schema, model } = require("mongoose");

const movieSchema = new Schema({
  title: {
    type: String,
    unique: true,
  },
  director: {
    type: String,
  },
  stars: [String],
  image: String,
  description: String,
});

const Movie = model("Movie", movieSchema);

module.exports = Movie;
