const mongoose = require('mongoose');

const { Schema } = mongoose;

const movieSchema = new Schema({
  title: { type: String, required: true },
  director: { type: String, required: true},
  stars: { type: [String], required: true},
  image: { type: String },
  description: { type: String, required: true },
  showtimes: { type: [String] },
},
{
  timestamps: true,
});

const Movie = mongoose.model('movie', movieSchema);

module.exports = Movie;
