const express = require('express');
const router = express.Router();
const MovieModel = require("./../models/Movie.model.js")

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get("/movies", async (req, res, next) => {
    try {
        const dbres = await MovieModel.find()
        res.render("movies", {movie: dbres})
    } catch(err) {
        next(err)
    }
});

router.get("/movie/:id", async (req, res, next) => {
    try {
        const dbres = await MovieModel.findById(req.params.id)
        res.render("movieDetails.hbs", {movie: dbres})
    } catch(err) {
        next(err)
    }
})

module.exports = router;
