const mongoose = require('mongoose')

const moviesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  director: {
    type: String,
    required: true
  },
  stars: {
    type: [String]
  },
  image: {
    type: String
  },
  description: {
    type: String,
    default: 'No description available to this movie'
  },
  showtimes: {
    type: [String]
  }
})

const Movie = mongoose.model('Movie', moviesSchema)

module.exports = Movie
