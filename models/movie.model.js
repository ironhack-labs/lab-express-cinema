const mongoose = require('mongoose');

const moviesSchema = new mongoose.Schema({
    title: {
      type: String,
      required: [true, 'A movie needs a title'],
    },
    director: {
      type: String,
      required: [true, 'A movie needs an director']
    },
    stars: {
        type: [String],
        required: [true, 'stars are required'],
    },
    image: {
        type: String,
        default: "https://images.media-allrecipes.com/images/75131.jpg"
    },
    description: {
      type: String,
    },
    showtimes: {
        type: [String],      
    }
  })

  const movie = mongoose.model('movie', moviesSchema)

  module.exports = movie