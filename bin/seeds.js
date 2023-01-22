// bin/seeds.js

const mongoose = require('mongoose');
const Movie = require('../models/Movie.model');

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1/lab-express-cinema';

const movies = [
  // PASTE HERE THE LIST OF BOOKS PROVIDED IN THIS GIST: https://gist.github.com/ironhack-edu/2816267a015d4870f95275cb873d33b6
];

mongoose
  .connect('mongodb://127.0.0.1/lab-express-cinema')
  .then(x => {
    console.log(`Connected to Mongo database: "${x.connections[0].name}"`);

    // Create new documents in the books collection
    return Movie.create(movies);
  })
  .then(moviesFromDB => {
    console.log(`Created ${moviesFromDB.length} movies`);

    // Once the documents are created, close the DB connection
    return mongoose.connection.close();
  })
  .then(() => {
    // Once the DB connection is closed, print a message
    console.log('DB connection closed!');
  })
  .catch(err => {
    console.log(`An error occurred while creating movies from the DB: ${err}`);
  });
