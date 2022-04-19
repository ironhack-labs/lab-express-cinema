const { Schema, model } = require('mongoose');

// TODO: Please make sure you edit the user model to whatever makes sense in this case
// models/Book.model.js

const movieSchema = new Schema({
  title: String,
  director: String,
  stars: { type: [String] },
  image: String,
  description: String,
  showtimes: [Array],
});

const Movie = model('Movie', movieSchema);
module.exports = model('Movie', movieSchema);
