const mongoose = require('mongoose');
const Movies = require('../models/Movie.model.js');
const data = require("../bin/seeds")

mongoose
  .connect('mongodb://localhost/express-cinema-dev', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    return x.connection.dropDatabase();
  })
  .then(() => {
    // Run your code here, after you have insured that the connection was made
    Movies.insertMany(data)
      .then((response) =>
        response.forEach((movie) => {
          console.log(movie);
        })
      )
      .catch((err) => console.error("Error insertMany", err));
  })
  .catch((error) => {
    console.error("Error connecting to the database", error);
  });
