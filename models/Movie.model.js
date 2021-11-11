const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const movieSchema = new Schema({
  title: {
    type: String,
    unique: true,
  },
  director: String,
  stars: [String],
  image: String,
  description: String,
  showtimes: [String],
});

const Movie = model("movie", movieSchema);

module.exports = Movie;
