require("dotenv").config();

const mongoose = require('mongoose');
const Movie = require('../models/Movie');
const movie_data = require('./movie_data');

// const dbURL = process.env.DBURL;
const dbURL = "mongodb://localhost/moviesPair"

mongoose.connect(dbURL).then(() =>{

    console.log(`Connected to db ${dbURL}`);

    movie_data.forEach(movie_data => {

      let movie = new Movie({
        title: movie_data.title,
        director: movie_data.director,
        stars: movie_data.stars,
        image: movie_data.image,
        description: movie_data.description,
        showtimes: movie_data.showtimes
      })
      .save()
      .then( () => {
        console.log("Movie created")
        mongoose.disconnect();
      })
   })
})
