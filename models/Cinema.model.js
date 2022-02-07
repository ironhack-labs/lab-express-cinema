const { Schema, model } = require('mongoose');

const cinemaSchema = new Schema(
  {
    title: {
        type: String,
    },
    director: {
        type: String,
    },
    stars: {
        type: Array,
    },
    image: {
        type: String,
    },
    description: {
        type: String,
    },
    showtimes: {
        type: Array,
    }
  }
);

module.exports = model('Cinema', cinemaSchema);
