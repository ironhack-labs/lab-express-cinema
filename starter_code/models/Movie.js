const mongoose = require('mongoose');

const { Schema } = mongoose;

const MovieSchema = new Schema({
  title: { type: String, required: true },
  director: { type: String, required: true },
  stars: { type: Array, required: true },
  image: { type: String, required: true },
  description: { type: String },
  showtimes: { type: Array },
});

const Movie = mongoose.model('Movie', MovieSchema);
module.exports = Movie;
