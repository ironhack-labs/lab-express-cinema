const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = new Schema({
  title: {
    type: String,
    unique: true,
    required: true
  },
  director:  String,
  stars: [ String ],
  image: {
    type: String,
    default: 'https://www.albedomedia.com/wp-content/uploads/2017/11/Film-Washi-01.jpg:'
  },
  description:  String,
  showtimes: [ String ]
})

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie