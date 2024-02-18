const Movie = require("../models/Movie.model")
const mongoose = require ("mongoose")


module.exports.list = (req, res, next) => {
    Movie.find ()
        .then ((movies) =>{
            res.render ('movies', { movies })
            console.debug(`this is  movies ${movies}`)
        } )
        .catch ((error) => {
            console.error (`this is an error `)
            next(error)})


}