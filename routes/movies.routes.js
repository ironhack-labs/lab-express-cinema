const router = require("express").Router()

const Movie = require('./../seeds/movies.seed')

Movie.create(movies)
    .then(movies => res.render('movies', { movies }))
    .catch(err => console.log(err))

module.exports = router