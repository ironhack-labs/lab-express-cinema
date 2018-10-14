const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const movieArr = require('../bin/seeds.js');

const movieSchema = new Schema ({
  title : String,
  director: String,
  stars: Array,
  image: String,
  description: String,
  showtimes: Array
})

const Movie = mongoose.model('Movie', movieSchema);

Movie.insertMany(movieArr)
  .then((result) => {
    console.log('Movies inserted');
  })
  .catch((error) => {
    console.log('error', error);
  });

  mongoose.connect('mongodb://localhost/cinemaApp')
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
});
