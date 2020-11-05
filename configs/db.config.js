const mongoose = require('mongoose');
const data = require('../bin/seeds');
const Movie = require('../models/Movie.model');

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
    // Run your code here, after you have insured that the connection was made
    Movie.insertMany(data)
      .then(movies => {
        console.log("connected to database 🔥")
      })
      .catch(error => console.log(error))
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });