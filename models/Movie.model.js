const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  director: {
    type: String,
  },
  starts: {
    type: [String],
  },
  image: {
    type: String,
  },
  description: {
    type: String,
  },
  showtimes: {
    type: [String],
  },
})

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie