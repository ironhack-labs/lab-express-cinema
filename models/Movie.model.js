const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "title name is required"],
  },
  director: {
    type: String,
    required: [true, "director name is required"],
  },
  stars: [String],
  image: {
    type: String,
    default: "https://picsum.photos/200/300.jpg",
  },
  description: String,
  showtimes: [String],
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
