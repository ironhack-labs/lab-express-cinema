const { Schema, model } = require('mongoose')

const movieSchema = new Schema(
  {
    title: String,
    director: String,
    starts: Array,
    image: URL,
    description: String,
    showtimes: Array
  },
  {
    timestamps: true
  }
);

module.exports = model('Movie', movieSchema)