const express = require('express');
const async = require('hbs/lib/async');
const router = express.Router();
const MovieModel = require("../models/Movie.model.js")

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

// Go to List Movies

router.get('/movies', async (req, res, next) => {
   try {
      
		const allMovies = await MovieModel.find()	
		res.render("movies.hbs", {
			allMovies
		})
	}
   catch(err){
		console.log(err)
  }
})

router.get('/movies/:movieId', async (req, res, next) => {
	
	const { movieId } = req.params;
	try{
		
		const detailMovie = await MovieModel.findById(movieId)
		
		res.render("details-movie.hbs", {
			detailMovie
		})
	}
	catch(err){
		console.log(err)
	}
})

module.exports = router;
