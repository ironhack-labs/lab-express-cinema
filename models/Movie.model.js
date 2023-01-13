const { Schema, model } = require('mongoose');

const movieSchema = new Schema({
  title: { type: String, required: true, unique: true },
  director: { type: String, required: true },
  stars: Array,
  image: String,
  description: String,
  showtimes: Array,
});

module.exports = model('Movie', movieSchema);
