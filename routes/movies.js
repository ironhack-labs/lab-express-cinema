const express       = require("express")
const router        = express.Router()

const movieController    = require("./../controllers/movieController")


router.get("/", movieController.index)

router.get("/movies", movieController.listMovies)
//en terminal: node seeds/movies.seeds.js
module.exports = router