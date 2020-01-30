const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const moviesSchema = new Schema(
  {
    title: String,
    director: String,
    stars: ['Storm Reid', 'Oprah Winfrey', 'Reese Witherspoon'],
    image: String,
    description: String,
    showtimes: [],
  },
  {
    timestamps: true,
  }
);

module.exports = model('Movie', moviesSchema);
