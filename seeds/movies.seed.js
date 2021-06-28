require('../db');

const movieData = require('./moviedata');
const MovieModel = require('../models/Movie.model');
const mongoose = require('mongoose');

MovieModel.create(movieData)
    .then(() => {
        console.log("Data seeded succesfully")
        mongoose.connection.close();
    })
    .catch(err => {
        console.log("Failed to seed data")
        mongoose.connection.close();
    })