const express = require("express")
const router = express.Router()
const {
  findMovies,
  findOneMovie
} = require("../controllers/movies.controllers")

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index")
})

/* GET all movies page */
router.get("/movies", findMovies)

/* GET one movie page */
router.get("/movies/:id", findOneMovie)

module.exports = router
