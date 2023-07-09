const mongoose = require("mongoose");

const movies = require("../movies.json");

require("../db/index");

const Movie = require("../models/Movie.model");

mongoose.connection.once("open", () => {
    mongoose.connection.dropCollection("movies")
        .then(() => {
            console.log("Hemos limpiado la colección");
            return Movie.create(movies);
        })
        .then(() => {
            movies.forEach((movie) => {
                console.log(`The movie ${movie.title} has been created`)
            })
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            mongoose.disconnect();
        })
})
