const express = require('express');
const router  = express.Router();

const {
  home,
  movies,
  moviesDetail
} = require("../controllers/index.controller")

/* GET home page */
router.get('/', home);

/* GET movies list */
router.get('/movies', movies);

/* GET movie detail */
router.get('/movies/:id', moviesDetail);

module.exports = router;
