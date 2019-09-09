const express = require('express');
const router  = express.Router();
const {indexView, moviesView, movieView} = require('../controllers/index-controller')

/* GET home page */
router.get('/', indexView)


//Movies route
router.get('/movies', moviesView)

//Movie route

router.get('/movie/:movieid', movieView)




module.exports = router;
