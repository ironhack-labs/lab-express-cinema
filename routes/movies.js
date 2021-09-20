const express       = require("express")
const router        = express.Router()

const movieController    = require("./../controllers/movieController")


router.get("/", movieController.index)

router.get("/movies", movieController.listMovies)

router.get("/:id", movieController.oneMovie)
//en terminal: node seeds/movies.seeds.js
module.exports = router