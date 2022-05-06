const express = require('express');
const router = express.Router();
const MovieModel = require("../models/Movie.model.js")

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

// Go to List Movies

router.get('/movies', async (req, res, next) => {
   try {
      
		const allMovies = await MovieModel.find()	
		res.render("movies.hbs", {
			allMovies: allMovies
		})

  }
   catch(err){

  }
})

module.exports = router;
