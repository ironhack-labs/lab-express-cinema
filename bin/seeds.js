// To insert in "bin/seeds.js"

const mongoose = require('mongoose');
const movie = require('../models/Movie.model');
const data = require ("./data")
 
const DB_NAME = 'data';
 
mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

Movie.create(movies)
  .then(moviesFromDB => {
      console.log(`Created: ${moviesfromDB.length} movies`);
      mongoose.connection.close();
    })
    .catch(err => console.log(`An error occurred while creating books from the DB: ${err}`));
