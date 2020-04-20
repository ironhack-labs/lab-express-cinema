const express = require('express')
const router = express.Router()
const { listMovies, details } = require('../controllers/movie')

/* GET home page */
router.get('/', (req, res) => {
  res.render('index')
})

router.get('/movies', listMovies)

router.get('/detail/:id', details)

module.exports = router
