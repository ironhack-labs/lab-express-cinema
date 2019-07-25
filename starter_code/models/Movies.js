const mongoose = require("mongoose")
const Schema = mongoose.Schema

const moviesSchema = new Schema({
  title: String,
  director: String,
  stars: Array,
  image: String,
  description: String,
  showtimes: Array
}, { timestamps: true })

const Movies = mongoose.model("Movies", moviesSchema)

module.exports = Movies