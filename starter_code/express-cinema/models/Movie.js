const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
// const data = require('../bin/seeds.js');

// mongoose.connect('mongodb://localhost/movieApp')
//   .then(() => {
//     console.log('Connected to Mongo!');
//   }).catch(err => {
//     console.error('Error connecting to mongo', err);

//   });

const movieSchema = new Schema ({
  title: String,
  director: String,
  stars: [],
  image: {type: String, default: '../public/images/not-found.png'},
  description: String,
  showtimes: [],
});


module.exports = movieSchema;


// const Movie = mongoose.model('Movie', movieSchema);

// Movie.insertMany(data)
// .then(() => {
//   console.log("Todo correcto");
// })
// .catch((error) => {
//   console.log(error, 'Error');
// })

