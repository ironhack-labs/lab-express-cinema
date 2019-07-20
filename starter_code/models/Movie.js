const mongoose = require('mongoose')
const Schema = mongoose.Schema

movieSchema = new Schema(
  {
    title:{
      type: String
    },
    director: {
      type: String
    },
    stars: {
      type: Array
    },
    image: {
      type: String
    },
    description: {
      type: String
    },
    showtimes: {
      type: []//es el mismo que en el objeto Stars
    }
  }
)
module.exports=mongoose.model('Movie',movieSchema)