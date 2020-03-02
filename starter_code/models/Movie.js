const mongoose = require('mongoose');

const { Schema } = mongoose;

const movieSchema = new Schema({
  title: {
    required: true,
    unique: true,
    type: String,
  },
  director: String,
  stars: Array,
  image: String,
  description: String,
  showtimes: Array,
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
