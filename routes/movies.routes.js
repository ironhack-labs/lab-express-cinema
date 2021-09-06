const router = require("express").Router()

const MovieModel = require("../models/Movie.model.js")
const Movie = require("../models/Movie.model.js")
const { route } = require("./index.js")

router.get("/movies", (req, res) => {
	Movie.find()
		.then((moviesFromDB) => {
			res.render("./movies.hbs", { movie: moviesFromDB })
		})
		.catch((error) => {
			console.log(`Error while getting movies from DB: ${error}`)
		})
})

router.get("/movies/:movieId", (req, res) => {
	Movie.findById(req.params.movieId)
		.then((thisMovie) => {
			// res.send(thisMovie)
			res.render("./movie-detail.hbs", thisMovie)
		})
		.catch((error) => {
			console.log("Error while getting movie details")
		})
})

module.exports = router
