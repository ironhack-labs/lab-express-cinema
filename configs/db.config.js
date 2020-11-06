const mongoose = require('mongoose');

const Movie = require('../models/Movie.model')

const data = require('../bin/seeds')

mongoose
  .connect('mongodb://localhost/express-cinema-dev', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(self => {
    console.log(`Connected to the database: "${self.connection.name}"`);
    // Before adding any documents to the database, let's delete all previous entries
    return self.connection.dropDatabase();
  })
  .then(() => {
    Movie.insertMany(data)
    .then(console.log("Success"))
    .catch(err => console.log(err))
  })
  .catch(err => console.log("Error connecting to database"))
