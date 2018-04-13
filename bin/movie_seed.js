require("dotenv").config();
const mongoose = require("mongoose");
const Movie = require("../models/Movie");
const movie_data = require("./movie_data");
const dbURL = "mongodb://localhost/lab-express-cinema";
console.log(dbURL);
let db = mongoose.connect(dbURL).then(() =>{
  Movie.collection.drop();
  console.log(`Connected to db ${dbURL}`);

  Movie.create(movie_data)
  .then((movies)=> {
    console.log(movies);
    mongoose.disconnect();

  })
  .catch((err) => {
    console.log(err)
  })

});





 