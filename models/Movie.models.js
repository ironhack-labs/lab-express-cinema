const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: {
    type: String,  
    unique: true,
    required: true,
  },
  director: {
    type: String,
  },
  stars: [String],  
  image: {
    type: String,
  },
  description: {
    type: String,
  },
  showtimes: [String]
})

const Movie = mongoose.model('movies', movieSchema);

module.exports = Movie;