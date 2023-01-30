const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// define movie schema
const movieSchema = new Schema({
  title: {
    type: 'String',
    require: true
  },
  director: {
    type: 'String',
    require: true
  },
  stars: {
    type: 'Array',
    require: true
  },
  image: {
    type: 'string',
    require: true
  },
  description: {
    type: 'String',
    require: true
  },
  showtimes: {
    type: 'Array',
    require: true
  },
});


const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;