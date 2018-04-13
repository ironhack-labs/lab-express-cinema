require("dotenv").config();

const mongoose = require('mongoose');
const Movie = require('../models/Movie');
const movies = require('./movie_data');
const dbURL = process.env.DBURL;

mongoose.connect(dbURL).then(() =>{
    console.log(`Connected to db ${dbURL}`);
    //Movie.collection.drop();
    console.log(movies)
    movies.forEach( movie => {
        console.log(movie)
            let movie_new = new Movie ({
                title: movie.title,
                director: movie.director,
                stars: movie.stars,
                image: movie.image,
                description: movie.description,
                showtimes: movie.showtimes
            })
            .save()
            .then( () => console.log("Created movie"))
        })
    })
    //mongoose.disconnect();

