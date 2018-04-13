require("dotenv").config();

const mongoose = require('mongoose');
const Movie = require('../models/Movie');
const movies_data = require('./movies_data');

const dbURL = process.env.DBURL;
// console.log({dbURL})
// console.log(process.env);

mongoose.connect(dbURL)
  .then(() => {
    console.log(`Connected to db ${dbURL}`);
    Movie.collection.drop();

    movies_data.forEach(movie_data => {
      let movie = new Movie(movie_data).save().then(() => {
        console.log("Created movie");
      })
    // mongoose.disconnect();
  })
})



