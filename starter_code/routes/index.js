const express = require('express');
const router  = express.Router();
const { homeView, getMovies, getDetail } = require('../controllers/index.controller')

/* GET home page */
router.get('/', homeView);
router.get('/list', getMovies);
router.get('/detail/:id', getDetail);


module.exports = router;
