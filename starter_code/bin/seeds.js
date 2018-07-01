require('../configs/db.configs');
const modelCinema = require('../models/cinema.model');
const movies = require('../data/cinema.data');
const mongoose = require('mongoose');

modelCinema.insertMany(movies)
    .then(data => {
        console.info(`Data inserted!`)
        mongoose.connection.close()
        }
    )
    .catch(err => {
        next(err);
        mongoose.connection.close();
    });

