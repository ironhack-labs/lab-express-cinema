require("dotenv").config();

const mongoose     = require('mongoose');
const Movie = require("../models/Movie")
const tocapelotas = "mongodb://localhost/lab-express-cinema";
const movies_data = require ("./movies_data")

mongoose
  .connect(tocapelotas, {useMongoClient: true})
  .then(() => {
    console.log('Connected to Mongo!')
    Movie.collection.drop();
    
    Movie.insertMany(movies_data)
    .then((movies) => {
      console.log(movies)
    })
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });

    
  
  

