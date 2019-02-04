const mongoose = require('mongoose');
const data     = require('../bin/seeds.js');
const Movie    = require('../models//Movie.js');

mongoose.connect('mongodb://localhost/starter-code', {useNewUrlParser: true})
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });

console.log(data);

Movie.insertMany(data)
  .then(movie => { console.log("Movie is saved") })
  .catch(err => { console.log("An error happened", err) });

  

  