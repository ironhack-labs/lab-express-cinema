const mongoose = require("mongoose")
const Schema = mongoose.Schema

const movieSchema = new Schema({
  title: String,
  description: String,
  stars: [Array],
  rating: Number
}, { timestamps: true })

const Movie = mongoose.model("Movies", movieSchema)

module.exports = Movie