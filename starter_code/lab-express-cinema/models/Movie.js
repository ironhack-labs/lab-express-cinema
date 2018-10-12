// Packages
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Definition of the Schema
const movieSchema = new Schema({
  title: {
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
    type: Array
  },
});

// Definition of the Model
const Movie = mongoose.model('Movie', movieSchema);

// Export the model
module.exports = Movie;