require("dotenv").config()
require("../configs/db.config")
const data = require('../data')
const Movie = require("../models/Movie.model")


Movie.deleteMany()
    .then(() => {
        Movie.insertMany(data)
            .then((movie) => {
                console.log(movie)
            })
    })
    .catch((e) => console.log("Error", e))