require("dotenv").config();

const mongoose = require("mongoose");
const Movie = require("../models/Movie");
const movies_data = require("./movie_data");


const dbURL = process.env.DBURL;
mongoose.connect(dbURL).then(() => {
  console.log(`Connected to db ${dbURL}`);
  Movie.collection.drop();
  movies_data.forEach(movie_data => {
    let movie = new Movie(movie_data).save()
    .then(console.log("MOVIES CREATE"));
  });
});
//mongoose.disconnect();

