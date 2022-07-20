const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required']
  },
  director: {
    type: String,
    required: [true, 'Director is required']
  },
  stars: {
    type: [String],
    required: [true, 'Stars are required'],
  },
  image: {
    type: String,
    required: [true, 'Image is required'],
  },
  description: {
    type: String,
    required: [true, 'Description is required']
  },
  showtimes: {
    type: [String],
    required: [true, 'Showtimes are required']
  }
})

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie