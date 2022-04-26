const { Schema, model } = require('mongoose');
 
const movieSchema = new Schema(
  {
    title: String,
    stars: String,
    description: String,
    director: String,
    rating: Number
  },
  {
    timestamps: true
  }
);
 
module.exports = model('Movie', movieSchema);