const mongoose = require('mongoose');
const movieSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  director: {
    type: String,
    require: true,
  },
  stars: [
    {
      type: String,
    },
  ],
  image: {
    type: String,
    default: 'https://www.hertrack.com/wp-content/uploads/2018/10/no-image.jpg',
  },
  description: {
    type: String,
  },
  showtimes: [
    {
      type: String,
    },
  ],
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
