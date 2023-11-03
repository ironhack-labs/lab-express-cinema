const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie.model")

/* GET home page */
router.get('/', (req, res) => res.render('index'));

router.get('/movies', (req, res) => {
    Movie
        .find()
        .then(data => {
            const movies = []
            data.forEach(elm => {
                movies.push({ id: elm.id, title: elm.title, image: elm.image })
            })
            res.render("movies", { movies })
        })
        .catch(err => console.log("fallaste con las movies, ", err))
}
);

router.get("/movie-details/:movieId", (req, res) => {
    const { movieId } = req.params

    Movie
        .findById(movieId)
        .then(data => res.render("movie-details", data))
        .catch(err => console.log("fallaste con los details", err))
})

module.exports = router;

