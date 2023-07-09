const mongoose = require("mongoose");

require("../db/index")

const movies = require("../movies.json")

const Movie = require("../models/Movie.model")

mongoose.connection.once("open", () => {
    mongoose.connection.dropDatabase()
        .then(() => {
            console.log("DB Borrada");
            return Movie.create(movies)
        })
        .then(movies => {
            movies.forEach(movie => {
                console.log(`${movie.title} ha sido creada`)
            })
        })
        .catch(err => {
            console.log(err)
        })
        .finally(() => {
            mongoose.disconnect();
        })
})
