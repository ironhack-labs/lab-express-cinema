const express = require('express');
const router = express.Router();
const {
  moviesView,
  moviesDesc
} = require("../controllers/index.controller");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/moviesview", moviesView);

router.get("/movie-description/:id", moviesDesc);


module.exports = router;