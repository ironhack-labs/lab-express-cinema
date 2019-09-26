const mongoose = require("mongoose")

const Movie = mongoose.model("movies", {
  title: String,
  director: String,
  stars: Array,
  image: String,
  description: String,
  showtimes: Array
})

module.exports = Movie