const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  director: {
    type: String,
    required: true
  },
  stars: [],
  image: String,
  description: String,
  showtimes: []
},
  {
    timestamps: true,
    versionKey: false
  }
)

module.exports = mongoose.model('Movie', movieSchema)