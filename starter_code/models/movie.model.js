const mongoose = require("mongoose")

const Schema = mongoose.Schema
const movieSchema = new Schema({

  title: {
    unique: true,
    type: String,
    required: true
  },
  director: {
    type: String,
    required: true
  },
  starts: {
    type: Array,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  showTimes: {
    type: Array,
    required: true
  }

}, {
  timestamps: true
})

const Movie = mongoose.model("Movie", movieSchema)

module.exports = Movie