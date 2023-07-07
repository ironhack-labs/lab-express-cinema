const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title of the movie is required'],
    },
    director: {
      type: String,
      required: [true, 'Director of the movie is required'],
    },
    stars: {
        type: [String], 
      required: [true, 'Stars of the movie are required'],
      },
      image: {
        type: String,
        default: 'https://movieprodportalstoweb.blob.core.windows.net/movieposters/supermariobros.jpg',
      },
    description: {
      type: String,
      required: [true, 'Description of the movie is required'],
    },
    showtimes : {
      type: [String], 
      required: [true, 'Stars of the movie are required'],
    },
  },
  {
    timestamps: true
  }
);

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;