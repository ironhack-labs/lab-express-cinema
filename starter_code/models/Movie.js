const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  director: {
    type: String
  },
  stars: [String],
  image: {
    type: String,
    default: "https://images.media-allrecipes.com/images/75131.jpg"
  },
  description: {
    type: String
  },
  showtimes: [String],
});

const movieModel = mongoose.model("Movie", movieSchema);

module.exports = movieModel;