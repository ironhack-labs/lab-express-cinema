const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const movieSchema = new Schema ({
  title : String,
  director: String,
  stars: Array,
  image: String,
  description: String,
  showtimes: Array
})//, {collection:'Companies'})

const Movie = mongoose.model('CinemaIronhack', movieSchema);
module.exports = Movie;