
//llamo al modelo

const Movie = require("../models/Movie.models")

//conectamos con la base de datos

require("../db/index")

//traigo donde están los datos

const allMovies = require("./movies.seed")

//agrego a la base de datos

Movie.insertMany(allMovies)

.then(() => {
    console.log("pelis subidas");
})

.catch((err) => {
    console.log(err);
})