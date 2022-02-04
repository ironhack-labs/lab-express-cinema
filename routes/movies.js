// const express = require('express')
// const router			= express.Router()

// const movieController	= require("./../controller/movieController")


// //obtener movies
// router.get("/", movieController.getMovies)


// //crear pagina para crear un libros en base de DATOS
// router.get("/movies", movieController.createMovies)

// module.exports = router


const express = require('express');
const router = express.Router();
const Movie		= require("./../models/Movie.model")

/* GET movies */
router.get('/',async (req, res) => {

	try {
		const foundMovies = await Movie.find({})
		res.render("movies", {
			data: foundMovies
		})

	} catch (error) {
		console.log(error)
	}	
});

module.exports = router;












