// models/Movie.model.js

const { Schema, model } = require('mongoose');

const movieSchema = new Schema(                      //Schema: the template we want every movie have
  {
    title: String,
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes: [String]
  },
  {
    timestamps: true                        
  }
);

module.exports = model('Movie', movieSchema); 