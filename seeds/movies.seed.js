const mongoose = require('mongoose'); 
const Movie = require("../models/Movie.model");
const Movies = require("../data/movies.json");

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost/lab-express-cinema"; 

mongoose.connection.once('open', () => {
    mongoose.connection.db.dropDatabase()
        .then(() => {
            return Movie.create(movies);
        })
        .then(createdMovies => {
            createdMovies.forEach(movie => console.log(`${movie.title} has been created.`));
            return mongoose.connection.close();
        })
        .then(() => {
            console.log('connection complete');
            process.exit(1);
        })
        .catch((err) => { 
            console.log("Error connecting to mongo ", err);
            process.exit(0);
        });
    });
    // .then((x) => {
    //     console.log("Connected to Mongo! Database ", x.connections[0].name);
    // })
    // .catch(( 
