const express = require('express');
const router = express.Router();
const MovieModel = require("./../models/Movie");

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get("/movies", async (req, res) => {
    try {
        res.render("movies", { movies: await MovieModel.find() });
    } catch(err) {
        console.log(err);
    }
})

router.get("/movie/:id", async (req, res) => {
    try{
        res.render("detailed-movie", await MovieModel.findById(req.params.id));
    } catch(err) {
        console.log(err);
    }
})

module.exports = router;
