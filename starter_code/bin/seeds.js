//clean database
//import movies either with mongoimport or here with Create method

//get movie and director model
//search for all the movies
//retrieve the director field
//create a director with that data, and in the then promise you get the new director object from the database
//get the ObjectId and UPDATE the director field in the movie object that you had

//get movies

const Movie = require("../models/movies");
const Director = require("../models/directors");
const mongoose = require("mongoose");

mongoose
  .connect('mongodb://localhost/cinemas', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

Movie.find({})
    .then((movies)=>{

        for(let i = 0; i < movies.length; i++) {
            let currentDirector = new Director({
                fullName:  movies[i].director
            })
    
            currentDirector.save()
                .then((newDirector)=>{
                    return Movie.findByIdAndUpdate(movies[i]._id, {director: newDirector._id}, {new: true})
                })
                .then((movie)=>{
                    console.log(movie);
                })
                .catch(err => console.log(err))
        }       
    })