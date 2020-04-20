const express = require('express')
const router = express.Router()

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index')
})

const { listView, detailView } = require('../controllers/movie')
router.get('/', (req, res) => {
  res.render('index')
})

router.get('/movies', listView)
router.get("/movie/:id", detailView);

module.exports = router
