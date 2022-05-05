require('../db')
const Movie = require('../models/Movie.model')
const movies = require('../data/movies')


const movieSeed = async () =>{
    try {
        await Movie.create(movies) 
        console.log("movies seeded succesfully")
    }catch(error){
        console.log(error)
    }
}

movieSeed();