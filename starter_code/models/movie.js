const mongoose = require("mongoose");


const movieSchema = new mongoose.Schema({
  title: String,
  director: String,
  stars: [String],
  image: {
    type: String,
    default: "https://images.pexels.com/photos/390089/film-movie-motion-picture-390089.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  description: String,
  showtimes: [String],
});

const movieModel = mongoose.model("movie", movieSchema);

module.exports = movieModel;