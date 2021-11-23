// To insert in "seeds/movies.seed.js"
const { create } = require('hbs');
const mongoose = require('mongoose');
const Movie = require('../models/Movie.model');
const movies = require("./movies.data")
const moviesData = require("./movies.data")


mongoose
.connect('mongodb://127.0.0.1/cinema', { useNewUrlParser: true, useUnifiedTopology: true })
.then(({ connection }) => console.log(`Connected to: ${connection.name}`))
.then(() => Movie.insertMany(moviesData))
.then(() => {
  mongoose.connection.close();
})
.catch(err => console.log(`An error occurred while creating movies from the DB: ${err}`));
  