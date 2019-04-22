const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = new Schema(
  {
    title: String,
    director: String,
    stars: [],
    image: String,
    description: String,
    showTimes: [],
  },
  {
    timestamps: true,
    versionKey: false
  }
)

const Movie = mongoose.model("Movie", movieSchema)

module.exports = Movie