const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = new Schema ({
  title: {type: String},
  director: {type: String},
  stars: {type: [String]},
  image: {type: String},
  description: {type: String},
  showtimes: {type: [String]},
}, { versionKey: false})

const Movie = mongoose.model('Movie', movieSchema)  // recibe como 1er argumento el nombre del model y como 2do el nombre del schema

module.exports = Movie;