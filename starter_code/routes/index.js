const express = require('express')
const router = express.Router()

const { 
  listMovies,
  detailView 
} = require('../controllers/cinema')


router.get('/', (req, res, next) => {
  res.render('index')
})


router.get('/movies', listMovies)
router.get('/detailMovie/:id', detailView)

module.exports = router
