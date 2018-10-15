const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const movies = require('../bin/seeds.js')

// mongoose.connect('mongodb://localhost/movieApp')
//   .then(() => {
//     console.log('Connected to Mongo!');
//   }).catch(err => {
//     console.error('Error connecting to mongo', err);
//   });

  const movieSchema = new Schema({
    title : String,
    director: String,
    stars: Array,
    image: String,
    description: String,
    showtimes: Array,
  });

  const Movie = mongoose.model('Movie', movieSchema);

  // Movie.insertMany(movies)
  // .then(result => {
  //   console.log(result)
  //   mongoose.connection.close();
  // })
  // .catch(error => {
  //   console.log(error)
  //   mongoose.connection.close();
  // })

  module.exports = Movie;