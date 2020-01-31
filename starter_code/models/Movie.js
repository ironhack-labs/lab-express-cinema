const moongose = require('mongoose')

const movieSchema = new moongose.Schema(
  
  {
    title: String,
    director: String,
    stars: Array,
    image: String,
    description: String,
    showtimes: Array
  }

)

module.exports = moongose.model('Movie', movieSchema)