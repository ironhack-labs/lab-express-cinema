const mongoose = require('mongoose');
const Movie = require('../models/Movie.model');
const seeds = require('../bin/seeds');

mongoose
  .connect('mongodb://localhost/express-cinema-dev', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(self => {
    console.log(`Connected to Mongo! Database name: "${self.connections[0].name}"`);
    return self.connection.dropDatabase();
  })
  .then(() => {
    Movie.insertMany(seeds, console.log('Database seeded.'));
  })
  .catch(err => console.error('Error connecting to mongo', err));