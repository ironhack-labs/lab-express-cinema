const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: {
    unique: true,
    type: String,
    required: true,
    default: 'Unknown',
    trim: true,
  },

  director: {
    type: String,
    default: 'Unknown',
  },

  stars: {
    type: [String],
  },

  image: {
    type: String,
    default:
      'https://media.istockphoto.com/vectors/error-404-page-not-found-vector-id673101428?k=20&m=673101428&s=170667a&w=0&h=sifFCXQls5ygak3Y-II0cI1tibgQZVyPWzpLHtHKOGg=',
  },

  description: {
    type: String,
    default: 'No description found',
  },

  showtimes: {
    type: [String],
  },
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
