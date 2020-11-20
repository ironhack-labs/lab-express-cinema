const mongoose = require("mongoose")

let MovieSchema = new mongoose.Schema({
  title: String,
  director: String,
  stars: [String],
  image: String,
  description: String,
  showtimes: [String],
})

let Movie = mongoose.model("Movie", MovieSchema)

module.exports = Movie