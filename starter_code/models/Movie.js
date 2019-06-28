const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = new Schema(
  {
    title: String,
    director: String,
    stars: Array,
    image: URL,
    description: String,
    showtimes: Array
  },
  {
    versionKey: false,
    timestamps: true
  }
)

module.exports = mongoose.model('Movie', movieSchema)
