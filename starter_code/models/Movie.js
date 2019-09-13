const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const movies = new Schema (
  {
    title : {type: String, required: true, unique: true},
    director: {type: String},
    stars: {type: Array},
    image: {type: String},
    description: String,
    showtimes: {type: Array}
  })
;

const Movie = mongoose.model('Movie', movies);

module.exports = Movie;

