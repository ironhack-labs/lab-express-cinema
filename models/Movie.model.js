const { Schema, model } = require('mongoose');

const movieSchema = new Schema(
  {
    title: String,
    director: String,
    stars: Number,
    description: String,
    showtime: Number,
  },
  {
    timestamps: true
  }
);

module.exports = model('Movie', movieSchema);
