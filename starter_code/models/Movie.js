const mongoose = require("mongoose")
const Schema = mongoose.Schema

const filmSchema = new Schema({
  title: String,
  director: String,
  stars: Array,
  image: String,
  descriptions: String,
  showtimes: Array
}, { timestamps: true })

const Film = mongoose.model("Film", filmSchema)

module.exports = Film

