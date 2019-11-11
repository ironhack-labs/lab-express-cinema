const mongoose = require('mongoose');

const { Schema } = mongoose;
const movieSchema = new Schema({
  title: { type: String, required: true },
  director: { type: String, required: true, default: undefined },
  stars: { type: [String], default: undefined },
  image: { type: String, default: undefined },
  description: { type: String, default: undefined },
  showtimes: { type: [String], default: undefined },
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
