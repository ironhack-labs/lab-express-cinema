const express = require('express')
const router = express.Router()
const { findMovies, findOneMovie} = require ('../controllers/movies.controller')  **revisar lo que falta para que funcionen los controladores

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index')
})

router.get('/movies', findMovies)
router.get('/movies/:id', findOneMovie)

module.exports = router
