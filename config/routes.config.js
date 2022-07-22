const router = require('express').Router()
const moviesController=require('../controllers/movies.controller')

//movies
router.get('/movies',moviesController.list)
router.get('/movies/:id', moviesController.movieDetail)

module.exports=router