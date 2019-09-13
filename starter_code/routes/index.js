const express = require('express')
const router = express.Router()
const router = express.Router()
const { indexView, moviesPage, moviesDetails } = require('../controllers')

router.get('/', (req, res, next) => {
  res.render('index')
})
router.get('/', indexView)
router.get('/movies', moviesPage)
router.get('/movies/:id', moviesDetails)

module.exports = router
module.exports = router
