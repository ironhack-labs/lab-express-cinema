const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const movieSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
      },
      director: {
        type: String,
        required: true,
        unique: true
      },
      stars: {
        type: [String],
        required: true,
        unique: true
      },
      image: {
        type: String,
        required: true,
        unique: true
      },
      description: {
        type: String,
        required: true,
        unique: true
      },
      showtimes: {
        type: [String],
        required: true,
      }
    });


const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;

  