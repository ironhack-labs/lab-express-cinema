const mongoose = require("mongoose");

const Movie = require("../models/movie-model");

mongoose.Promise = Promise;
mongoose
    .connect('mongodb://localhost/library-project', {useMongoClient: true})
    .then(() => {
        console.log("Connected to Mongo!")
    })
    .catch(err => {
        console.log('Error connecting to mongo', err);
    });

const movies = require('../models/data');


Movie.create(movies)
.then(() => {
    console.log(`Created ${movies.length} movies`);
})
.catch(() => {
    console.log("Creation ERROR", err);
});