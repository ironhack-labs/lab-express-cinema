const { Schema, model } = require('mongoose');

const movieSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      unique: false
    },
    director: {
      type: String,
      required: true,
      lowercase: true,
      trim: true
    },
    stars: [],

      image: {
        type: String,
        required: true,
        trim: true
      },
      description: {
        type: String,
        required: true,
        trim: true
      },
      showtimes: [],

  }
);

module.exports = model('Movie', movieSchema)