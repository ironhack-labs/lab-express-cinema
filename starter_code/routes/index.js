const express = require('express');
const router  = express.Router();

const{
  movies,
  moviesInfo
}=require("../controllers/index.controller");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies',movies);
router.get("/movies/:id", moviesInfo);

module.exports = router;
