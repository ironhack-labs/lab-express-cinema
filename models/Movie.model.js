const mongoose = require("mongoose")
const moviesSchema = new mongoose.Schema({
    title: String,
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes: [String]
  })

  const Movies = mongoose.model("Movies", moviesSchema )
  
  module.exports = Movies