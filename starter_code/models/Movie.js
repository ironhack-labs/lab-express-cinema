const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
  title: String,
  director: String,
  stars: [String], // Array works too, but it's good to be specific
  image: String,
  description: String,
  showtimes: [String] // Array works here as well
})

const Movie = mongoose.model("Movie", movieSchema)

module.exports = Movie