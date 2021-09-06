// models/Movie.model.js

const { Schema, model } = require('mongoose');

const movieSchema = new Schema(
  {
    title: {type: String, unique: true},
	director: String,
    description: String,
    stars: [String],
    image: String,
	showtimes: [String]
  },
  {
    timestamps: true
  }
);

module.exports = model('Movie', movieSchema);
