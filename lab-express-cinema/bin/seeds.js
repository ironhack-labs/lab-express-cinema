require("dotenv").config();

const mongoose = require('mongoose');
const Movies = require('../models/Movies');
const data = require('./data');

const dbURL = process.env.DBURL;

mongoose.connect(dbURL)
.then(() =>{
    console.log(`Connected to db ${dbURL}`);
    Movies.collection.drop();

    Movies.create(data)
    .then(function (movies) {
        console.log(movies)
    })
})
.catch((err) => {
    console.log(err)
})