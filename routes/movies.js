const express = require('express');
const router = express.Router();
const movieController = require("./../controllers/movieController")
const PunkAPIWrapper = require("punkapi-javascript-wrapper")
const async = require("hbs/lib/async")

router.get('/', movieController.getMovies);

router.get("/movies/:id", async (req, res) => {
    const id =req.params.id
    const punkAPI = new PunkAPIWrapper()
    const selectedProduct = await punkAPI.getMovies(id)
    
	res.render("movies", {
        allBeers: selectedProduct
    })
})

module.exports = router;