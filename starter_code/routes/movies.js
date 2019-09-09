const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/movies", (req, res, next) => {
  // get all the books
  // render a 'books' view with the books data
  res.render("movies");
});

module.exports = router;
