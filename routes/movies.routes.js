const express = require("Express");
const router = express.Router();

const Movie = require("../models/Movies.model");

router.get("/", (req, res) => {
    Movie.find()
    .then((allMoviesFromDB) => {
        // console.log(allMoviesFromDB)
        res.render("movies", {allMoviesFromDB});
    })
    .catch((error) =>
        console.log(`Error while getting all movies from DB: ${error}`));
});


router.get("/:id", (req, res) => {
    console.log('director')
    const { id } = req.params;
    Movie.findById(id)
    .then((movieDetails) => {

        res.render("movie-details", {movieDetails});
    })
    .catch((error) =>
        console.log(`Error while getting movie with id ${id} from DB: ${error}`));
});

module.exports = router;