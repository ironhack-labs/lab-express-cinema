//importacion
const mongoose = require('mongoose')

//esquema
const movieSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
      director:{
          type: String,
          required: true
      },
      stars: [ String ],
      image:{
          type: String,
          required: true
      },
      description:{
        type: String,
        required: true
      },
      showtimes: [ String]
})
//modelos
const Movie = mongoose.model('Movie', movieSchema)

//exportacion
module.exports = Movie;