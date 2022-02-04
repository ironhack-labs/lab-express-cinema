// importaciones
const express = require('express')
const router = express.Router()
const Movie = require("./../models/Movie.model")

const movieController = require('../controllers/movieController.js')
// Ruteo
router.get('/', async (req, res) => {
    
    try {
        const foundMovies = await Movie.find({})
        res.render("movies", {
            data: foundMovies
        })
    } catch (error) {
        console.log(error)
    }
}
)




//Exportaciones
module.exports = router