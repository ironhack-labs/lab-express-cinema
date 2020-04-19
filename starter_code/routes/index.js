const express = require('express')
const router = express.Router()

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index')
})

const { listMovies, detailView } = require('../controllers/cinema')

router.get('/movies', listMovies)
router.get('/detailMovie/:id', detailView)

module.exports = router
