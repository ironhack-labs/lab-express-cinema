const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema(
  {
    title: {type: String},
    director: {type: String},
    stars: [],
    image: {type: String},
    description: {type: String},
    showtimes: []
  }
)