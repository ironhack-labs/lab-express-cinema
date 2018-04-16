require("dotenv").config();

const mongoose = require('mongoose');
const Movie = require('../models/Movie');
const data = require('./data');

const dbURL = process.env.DBURL;
mongoose.connect(dbURL).then(() =>{
    console.log(`Connected to db ${dbURL}`);
    Movie.collection.drop();

    Movie.create(data)
    .then((movies) => {
        console.log(movies)
    })
    .catch((err) => {
        console.log(err)
    })
    //mongoose.disconnect();
})