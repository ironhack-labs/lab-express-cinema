const mongoose = require('mongoose');
const Movie = require('../models/Movie.model');

require('../db/index');

const movies = require('../data.json');

mongoose.connection.once('open', ()=>{
    Movie.deleteMany()
        .then(()=>{
            return Movie.create(movies);
        })
        .then((moviesCreated)=>{
            console.log('***Movies were created***', moviesCreated)
        })
        .then(() => {
            return mongoose.connection.close();
          })
          .then(() => {
            console.log("Connection closed");
            process.exit(1);
          })
          .catch(err => {
            console.error(err)
            process.exit()
          })
})