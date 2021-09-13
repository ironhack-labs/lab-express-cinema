const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  stars: {
    type: [String],
    required: true,
  },
  image: {
    type: String,
    default:
      "https://res.cloudinary.com/dlfxinw9v/image/upload/v1631037631/default-profile-picture_sohcwq.png",
  },
  description: {
    type: String,
    required: true,
  },
  showtimes: {
    type: [String],
    required: true,
  },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
